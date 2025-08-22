"use client"

import AppLoading from "@/app/components/AppLoading";
import AppProductList from "@/app/components/AppProductList";
import { useProduct2 } from "@/hooks/useProduct2";

export default function ProductView() {

    const { product, loading, error } = useProduct2();

    if (loading) {
        return <AppLoading />
    }

    if (error) {
        return <p></p>
    }

    return (
        <div>
            <p>Product View</p>
            {
                product!.length > 0 && <AppProductList product={product!} />
            }
        </div>
    );
}