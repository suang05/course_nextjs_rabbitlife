'use client'

import { useSearchParams } from "next/navigation";
import ProductDetailView from "../[id]/productDetailView";

export default function ProductDetailPage() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    return (
        <ProductDetailView id={Number(id)} />
    );
}