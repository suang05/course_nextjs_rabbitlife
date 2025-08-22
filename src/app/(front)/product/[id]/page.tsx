import { Product } from "@/types/product_response";
import ProductDetailView from "./productDetailView";

export async function generateStaticParams() {
    const productResponse = await fetch('https://api.codingthailand.com/api/course').then((res) => res.json())
    
    return productResponse.data.map((item: Product) => ({
        id: item.id.toString(), // [{id:1, id:2, id: 3, ....}]
    }))
}
export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    
    return (
        <main>
            <ProductDetailView id={Number(id)}></ProductDetailView>
            {/* {ID} */}
        </main>
    )
}