"use client";
import { ProductSignInButton, SubmitButton } from "@/components/form/buttons";
import FormContainer from "@/components/form/form-container";
import SelectProductAmount, {
  Mode,
} from "@/components/single-product/select-product-amount";
import { addToCartAction } from "@/utils/actions";
import { useAuth } from "@clerk/nextjs";
import { useState } from "react";

function AddToCart({ productId }: { productId: string }) {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();
  return (
    <div className='mt-4'>
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type='hidden' name='productId' value={productId} />
          <input type='hidden' name='amount' value={amount} />
          <SubmitButton text='add to cart' className='mt-8' />
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}
    </div>
  );
}

export default AddToCart;
