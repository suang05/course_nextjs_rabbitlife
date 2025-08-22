import { ProductResponse } from "@/types/product_response";
import axios from "axios";

export async function fetchProductService() {

    const response = await axios.get<ProductResponse>('https://api.codingthailand.com/api/course');
    return response.data;
}

export async function fetchProductByIdService(id: number) {
    // ถ้า backend มาเป็น () ไม่ใช่ get<any> ถ้ามาเป็น [] ต้องเป็น get<any[]>
    const response = await axios.get<ProductResponse>('https://api.codingthailand.com/api/course/' + id);
    return response.data;
}