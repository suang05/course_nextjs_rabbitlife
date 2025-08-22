import { fetchProductByIdService, fetchProductService } from "@/services/productService";
import { ProductResponse } from "@/types/product_response";
import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios";

type productErrorResponse = {
    message: string,
}

export function useProduct2() {
    const { data, isFetching, error } = useQuery<ProductResponse, AxiosError<productErrorResponse>>({
        queryKey: ['productData'],
        queryFn: fetchProductService,
        // refetchInterval: 2000,
        retry: 3,
        refetchOnWindowFocus: true
    });

    return { 
        product: data?.data,
        loading: isFetching,
        error: error?.response?.data.message
    }
}

export function useProduct2ById (id: number) {
    const { data } = useQuery({
        queryKey : ['chapter', id],
        queryFn: () => fetchProductByIdService(id),
    });

    return { chapter: data}
}