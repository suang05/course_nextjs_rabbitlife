"use client"

import { fetchProductService } from "@/services/productService";
import { Product } from "@/types/product_response";
import { useEffect, useState } from "react";

export default function ProductView() {

    const [product, setProduct] = useState<Product[]>([]);

    const fetchData = async () => {
        const productResponse = await fetchProductService();
        setProduct(productResponse.data);
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <div>
            <p>Product View</p>
            {JSON.stringify(product)}
        </div>
    );
}