"use client"

import AppLoading from "@/app/components/AppLoading";
import { useProduct } from "@/hooks/useProduct";

export default function ProductView() {

    const { product, loading } = useProduct();

    if (loading) {
        return <AppLoading />
    }

    return (
        <div>
            <p>Product View</p>
            {JSON.stringify(product)}
        </div>
    );
}