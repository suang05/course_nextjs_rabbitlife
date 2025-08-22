"use client"

import { useProduct2ById } from "@/hooks/useProduct2";

type productDetailViewResponse = {
    id: number,
}

export default function ProductDetailView({ id }: productDetailViewResponse) {
    const { chapter } = useProduct2ById(id);

    return (
        <div>
            {JSON.stringify(chapter)}
        </div>
    );
}