import FeaturedProducts from "@/components/home/featured-products";
import Hero from "@/components/home/hero";

const HomePage = () => {
  return (
    <div className='text-muted-foreground'>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};
export default HomePage;
