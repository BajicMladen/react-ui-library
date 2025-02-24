import React from "react";
import { BUTTON_VARIANT_TYPE, BUTTON_CLASSES } from "./button-config";

type ButtonProps = {
  id?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  variant: BUTTON_VARIANT_TYPE;
  handleClick?: () => void;
  className?: string;
  children: React.ReactNode;
};
export const Button = ({
  disabled,
  type = "button",
  variant = BUTTON_VARIANT_TYPE.PRIMARY_VELVET,
  handleClick,
  className = "",
  children,
  id,
}: ButtonProps) => {
  return (
    <button
      id={id}
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${
        BUTTON_CLASSES[variant]
      } min-w-12 flex h-12 items-center justify-center gap-4 px-3 text-sm md:px-4 ${className} ${
        disabled && "pointer-events-none opacity-40"
      }`}
    >
      {children}
    </button>
  );
};
