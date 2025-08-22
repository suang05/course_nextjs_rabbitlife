import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { Product } from "@/types/product_response";

type AppButtonPromp = {
    item: Product
}

export default function AppCartButton({item}: AppButtonPromp) {
    const addItem = useCartStore((state) => state.addItem);
    const totalItems = useCartStore((state) => state.totalItems());

    const onHandleAddItem = () => {
        console.log('add product: ', item);
        addItem({
            productId: item.id.toString(),
            title: item.title,
            price: item.view,
            qty: 1
        });
        console.log('add product: ', totalItems);
    }

    return (
        <div>
            <Button onClick={onHandleAddItem}>หยิบใส่ตะกร้า</Button>
        </div>
    );
}