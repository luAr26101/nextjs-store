import {
  FirstColumn,
  ForthColumn,
  SecondColumn,
} from "@/components/cart/cart-item-columns";
import ThridColumn from "@/components/cart/third-column";
import { Card } from "@/components/ui/card";
import type { CartItemWithProduct } from "@/utils/types";

function CartItemsList({ cartItems }: { cartItems: CartItemWithProduct[] }) {
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, amount } = cartItem;
        const { name, price, company, image, id: productId } = cartItem.product;
        return (
          <Card
            key={id}
            className='flex flex-col gap-y-4 md:flex-row flex-wrap p-6 mb-8 gap-x-4'
          >
            <FirstColumn image={image} name={name} />
            <SecondColumn name={name} company={company} productId={productId} />
            <ThridColumn id={id} quantity={amount} />
            <ForthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
}

export default CartItemsList;
