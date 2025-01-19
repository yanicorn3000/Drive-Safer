import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

type ClassNameProp = {
  className?: string;
};

type ButtonProps = {
  variant: "primary" | "secondary";
} & ClassNameProp &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  variant,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "font-medium rounded-lg focus:outline-none focus:ring text-sm px-4 py-2 text-center",
        className,
        {
          "text-white bg-violet-500 hover:bg-violet-700 focus:ring-violet-300 ":
            variant === "primary" && !disabled,
          "text-white bg-green-400 hover:bg-gray-600 focus:ring-green-300":
            variant === "secondary" && !disabled,
          "opacity-50 cursor-not-allowed": disabled,
        }
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
