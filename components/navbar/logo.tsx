import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RiShoppingBasketFill } from "react-icons/ri";
function Logo() {
  return (
    <Button asChild size='icon'>
      <Link href='/'>
        <RiShoppingBasketFill className='w-6 h-6' />
      </Link>
    </Button>
  );
}

export default Logo;
