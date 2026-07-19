import SectionTitle from "@/components/global/section-title";
import ReviewCard from "@/components/reviews/review-card";
import { fetchProductReviews } from "@/utils/actions";

async function ProductReviews({ productId }: { productId: string }) {
  const reviews = await fetchProductReviews(productId);
  return (
    <div className='mt-16'>
      <SectionTitle text='product reviews' />
      <div className='grid md:grid-cols-2 gap-8 my-8'>
        {reviews.map((review) => {
          const { comment, rating, authorName, authorImageUrl } = review;
          const reviewInfo = {
            comment,
            rating,
            image: authorImageUrl,
            name: authorName,
          };

          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
}

export default ProductReviews;
