import cn from "clsx";
import { ChangeEvent, ChangeEventHandler, forwardRef } from "react";

interface InputFieldProps {
  id: string;
  label?: string;
  extra?: string;
  type?: string;
  isNumber?: boolean;
  state?: "success" | "error";
  disabled?: boolean;
  placeholder: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      id,
      label,
      extra,
      type,
      isNumber,
      state,
      disabled,
      placeholder,
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={`${extra} flex flex-grow`}>
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
        <input
          ref={ref}
          disabled={disabled}
          className={cn(
            `flex w-full p-3 item-center justify-center rounded-md borderborder-grey text-white outline-none
            duration-500 transition-colors focus:border-primary`,
            className,
          )}
          id={id}
          placeholder={placeholder}
          type={type ?? "text"}
          onKeyDown={(event) => {
            if (
              isNumber &&
              !/[0-9]/.test(event.key) &&
              event.key !== "Backspace" &&
              event.key !== "Tab" &&
              event.key !== "Enter" &&
              event.key !== "ArrowLeft" &&
              event.key !== "ArrowRight"
            ) {
              event.preventDefault();
            }
          }}
          {...rest}
        />
      </div>
    );
  },
);

InputField.displayName = "field";
