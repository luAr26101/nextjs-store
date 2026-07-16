"use client";

import { SubmitButton } from "@/components/form/buttons";
import FormContainer from "@/components/form/form-container";
import ImageInput from "@/components/form/image-input";
import { Button } from "@/components/ui/button";
import type { ActionFunction } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: ActionFunction;
  text: string;
  children?: React.ReactNode;
};
function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text, children } = props;
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
  return (
    <div className='mb-8'>
      <Image
        src={image}
        width={200}
        height={200}
        className='rounded object-cover mb-4 w-[200px] h-[200px]'
        alt={name}
        priority
      />
      <Button
        variant='outline'
        size='sm'
        onClick={() => setIsUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className='max-w-md mt-4'>
          <FormContainer action={action}>
            {children}
            <ImageInput />
            <SubmitButton size='sm' text={text} />
          </FormContainer>
        </div>
      )}
    </div>
  );
}

export default ImageInputContainer;
