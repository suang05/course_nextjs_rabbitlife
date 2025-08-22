import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Product } from "@/types/product_response"
import myImageLoader from "@/utils/loader"
import Image from "next/image"
import AppCardButton from "./AppButton"
import Link from "next/link"

type AppProductListPromp = {
    product: Product[]
}

export default function AppProductList ({ product }: AppProductListPromp) {


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {
                product.map((item) => (
                    // <p key={item.id}>{item.title}</p>
                    <Card key={item.id}>
                        <CardHeader>
                            <CardTitle >{item.title}</CardTitle>
                            <CardDescription>{item.detail}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image
                                loader={myImageLoader}
                                src={item.picture}
                                alt={item.title}
                                width={0}
                                height={0}
                                style={{ width: 250, height: 'auto'}}
                                priority
                                unoptimized
                            />
                        </CardContent>
                        <CardFooter>
                            <AppCardButton item={item} />
                            {/* <Button variant="outline">ซื้อเลย...</Button> */}
                            <Button asChild>
                                <Link href={`/product/${item.id}`}>รายละเอียด</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))
            }
            {/* {JSON.stringify(product)} */}
        </div>        
    )

}