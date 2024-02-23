import cn from "clsx";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        "rounded-sm bg-primary w-full p-2 hover:bg-primaryHover transition ease-in flex justify-center items-center",
        className,
      )}
      onClick={rest.onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
