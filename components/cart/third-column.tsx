"use client";

import { SubmitButton } from "@/components/form/buttons";
import FormContainer from "@/components/form/form-container";
import SelectProductAmount, {
  Mode,
} from "@/components/single-product/select-product-amount";
import { useToast } from "@/components/ui/use-toast";
import { removeCartItemAction, updateCartItemAction } from "@/utils/actions";
import { useState } from "react";

function ThridColumn({ id, quantity }: { id: string; quantity: number }) {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const handleAmountChange = async (value: number) => {
    setIsLoading(true);
    toast({ description: "Calculating..." });
    const result = await updateCartItemAction({
      cartItemId: id,
      amount: value,
    });
    setAmount(value);
    toast({ description: result.message });
    setIsLoading(false);
  };
  return (
    <div className='md:ml-8'>
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={isLoading}
      />
      <FormContainer action={removeCartItemAction}>
        <input type='hidden' name='id' value={id} />
        <SubmitButton size='sm' className='mt-4' text='remove'></SubmitButton>
      </FormContainer>
    </div>
  );
}

export default ThridColumn;
