import { fetchProductService } from "@/services/productService";
import { Product } from "@/types/product_response";
import { useEffect, useState } from "react";

export function useProduct () {
    const [product, setProduct] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const productResponse = await fetchProductService();
            setProduct(productResponse.data);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return {product, loading};
}