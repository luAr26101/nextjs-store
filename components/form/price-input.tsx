import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const name = "price";
type PriceInputProps = {
  defaultValue?: number;
};

// Prisma.ProductScalarFieldEnum.price;

function PriceInput({ defaultValue }: PriceInputProps) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        price ($)
      </Label>
      <Input
        id={name}
        type='number'
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}

export default PriceInput;
