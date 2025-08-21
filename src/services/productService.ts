import { ProductResponse } from "@/types/product_response";
import axios from "axios";

export async function fetchProductService() {

    const response = await axios.get<ProductResponse>('https://api.codingthailand.com/api/course');
    return response.data;
}