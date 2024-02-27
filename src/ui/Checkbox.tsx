import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  extra?: string;
  color?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ extra, color, ...rest }) => {
  return (
    <input
      type="checkbox"
      className={`defaultCheckbox flex relative h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
        justify-center rounded-md border border-grey outline-none transition duration-[0.2s] checked:border-none
         checked:text-white hover:cursor-pointer checked:accent-primary ${extra}`}
      name="taskCheckbox"
      {...rest}
    />
  );
};

export default Checkbox;
