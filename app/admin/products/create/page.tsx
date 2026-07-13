import { SubmitButton } from "@/components/form/buttons";
import CheckboxInput from "@/components/form/checkbox-input";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import ImageInput from "@/components/form/image-input";
import PriceInput from "@/components/form/price-input";
import TextAreaInput from "@/components/form/textarea-input";
import { createProductAction } from "@/utils/actions";
import { faker } from "@faker-js/faker";

function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
      <div className='border p-8 rounded-md'>
        <FormContainer action={createProductAction}>
          <div className='grid gap-4 md:grid-cols-2 my-4'>
            <FormInput
              type='text'
              name='name'
              label='Product Name'
              defaultValue={name}
            />
            <FormInput
              type='text'
              name='company'
              label='company'
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name='description'
            labelText='product description'
            defaultValue={description}
          />
          <div className='mt-6'>
            <CheckboxInput name='featured' label='featured' />
          </div>
          <SubmitButton text='create product' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateProductPage;
