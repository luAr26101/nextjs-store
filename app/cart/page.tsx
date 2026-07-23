import CartItemsList from "@/components/cart/cart-items-list";
import CartTotals from "@/components/cart/cart-totals";
import SectionTitle from "@/components/global/section-title";
import { fetchOrCreateCart, updateCart } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function CartPage() {
  const { userId } = auth();
  if (!userId) redirect("/");

  const previousCart = await fetchOrCreateCart({ userId });
  const { currentCart, cartItems } = await updateCart(previousCart);

  if (cartItems.length === 0) {
    return <SectionTitle text='Empty Cart' />;
  }

  return (
    <>
      <SectionTitle text='Shopping cart' />
      <div className='mt-4 grid gap-4 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList cartItems={cartItems} />
        </div>
        <div className='lg:col-span-4'>
          <CartTotals cart={currentCart} />
        </div>
      </div>
    </>
  );
}

export default CartPage;
