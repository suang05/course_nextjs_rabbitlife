import { Button } from "@/components/ui/button";
import { Product } from "@/types/product_response";

type AppButtonPromp = {
    item: Product
}

export default function AppCardButton({item}: AppButtonPromp) {

    const onHandleAddItem = () => {
        console.log('add product: ', item);
    }

    return (
        <div>
            <Button onClick={onHandleAddItem}>หยิบใส่ตะกร้า</Button>
        </div>
    );
}