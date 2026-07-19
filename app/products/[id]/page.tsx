import FavoriteToggleButton from "@/components/products/favorite-toggle-button";
import ProductReviews from "@/components/reviews/product-reviews";
import SubmitReview from "@/components/reviews/submit-review";
import AddToCart from "@/components/single-product/add-to-cart";
import Breadcrumbs from "@/components/single-product/breadcrumbs";
import ProductRating from "@/components/single-product/product-rating";
import ShareButton from "@/components/single-product/share-button";
import { fetchSingleProduct, findExistingReview } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

async function SingleProductPage({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  const { id: productId, name, image, company, price, description } = product;
  const dollarAmount = formatCurrency(price);
  const { userId } = auth();
  const reviewDoesNotExit =
    userId && !(await findExistingReview(userId, productId));
  return (
    <section>
      <Breadcrumbs name={name}></Breadcrumbs>
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE FIRST COLUMN */}

        <div className='relative h-full'>
          <Image
            src={image}
            alt={name}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
            className='w-full rounded object-cover'
          />
        </div>
        {/* PRODUCT INFO SECOND COLUMN */}
        <div>
          <div className='flex gap-x-8 items-center'>
            <h1 className='capitalize text-3xl font-bold'>{name}</h1>
            <div className='flex items-center gap-x-2'>
              <FavoriteToggleButton productId={params.id} />
              <ShareButton productId={params.id} name={name} />
            </div>
          </div>
          <ProductRating productId={params.id} />
          <h4 className='text-xl mt-2'>{company}</h4>
          <p className='mt-3 text-md bg-muted inline-block p-2 rounded'>
            {dollarAmount}
          </p>
          <p className='mt-6 leading-8 text-muted-foreground'>{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
      {/* REVIEWS SECTION */}
      <ProductReviews productId={params.id} />
      {reviewDoesNotExit && <SubmitReview productId={params.id} />}
    </section>
  );
}

export default SingleProductPage;
