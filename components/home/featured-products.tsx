import EmptyList from "@/components/global/empty-list";
import SectionTitle from "@/components/global/section-title";
import ProductsGrid from "@/components/products/products-grid";
import { fetchFeaturedProducts } from "@/utils/actions";

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  console.log(products);
  if (products.length === 0) return <EmptyList />;
  return (
    <section className='pt-24'>
      <SectionTitle text='Featured Products' />
      <ProductsGrid products={products} />
    </section>
  );
}

export default FeaturedProducts;
