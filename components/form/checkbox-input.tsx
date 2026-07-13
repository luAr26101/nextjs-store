import { Checkbox } from "@/components/ui/checkbox";

type CheckboxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};

export default function CheckboxInput(props: CheckboxInputProps) {
  const { name, label, defaultChecked = false } = props;
  return (
    <div className='flex items-center space-x-2'>
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
      <label
        htmlFor={name}
        className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize'
      >
        {label}
      </label>
    </div>
  );
}
