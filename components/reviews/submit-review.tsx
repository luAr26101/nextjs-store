"use client";

import { SubmitButton } from "@/components/form/buttons";
import FormContainer from "@/components/form/form-container";
import TextAreaInput from "@/components/form/textarea-input";
import RatingInput from "@/components/reviews/rating-input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createReviewAction } from "@/utils/actions";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

function SubmitReview({ productId }: { productId: string }) {
  const [isReviewFormVisibile, setIsReviewFormVisible] = useState(false);
  const { user } = useUser();
  return (
    <div>
      <Button
        size='lg'
        className='capitalize'
        onClick={() => setIsReviewFormVisible((prev) => !prev)}
      >
        leave review
      </Button>
      {isReviewFormVisibile && (
        <Card className='p-8 mt-8'>
          <FormContainer action={createReviewAction}>
            <input type='hidden' name='productId' value={productId} />
            <input
              type='hidden'
              name='authorName'
              value={user?.firstName || "user"}
            />
            <input type='hidden' name='authorImageUrl' value={user?.imageUrl} />
            <RatingInput name='rating' labelText='Rating' />
            <TextAreaInput
              name='comment'
              labelText='Feedback'
              defaultValue='Outstanding product'
            />
            <SubmitButton className='mt-4' />
          </FormContainer>
        </Card>
      )}
    </div>
  );
}

export default SubmitReview;
