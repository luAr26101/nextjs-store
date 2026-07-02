import Container from "@/components/global/container";
import CartButton from "@/components/navbar/cart-button";
import DarkMode from "@/components/navbar/dark-mode";
import LinksDropdown from "@/components/navbar/links-dropdown";
import Logo from "@/components/navbar/logo";
import NavSearch from "@/components/navbar/nav-search";
import { Suspense } from "react";

function Navbar() {
  return (
    <nav className='border-b'>
      <Container className=' flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8'>
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className='flex gap-4 items-center'>
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
