import { Product } from "@/types/product_response"

type AppProductListPromp = {
    product: Product[]
}

export default function AppProductList ({ product }: AppProductListPromp) {


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {
                product.map((item) => (
                    <p key={item.id}>{item.title}</p>
                ))
            }
            {/* {JSON.stringify(product)} */}
        </div>        
    )

}