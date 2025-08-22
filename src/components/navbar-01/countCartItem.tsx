'use client'

import { useCartStore } from "@/stores/cartStore";
import { useEffect, useState } from "react";

export default function CountCartItem() {

    const totalItems = useCartStore((state) => state.totalItems());
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            {totalItems}
        </>
    );
}