import React from "react";
import { ButtonSpinner } from "./ButtonSpinner";

interface ButtonProps {
  text: string;
  width?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary" | "custom" | "gradient";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  width = "",
  bgColor = "",
  textColor = "text-white",
  borderColor = "",
  fullWidth = false,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  variant = "primary",
  className = "",
}) => {
  const getClassNames = () => {
    let classNames = `px-6 py-2 flex justify-center items-center gap-2 ${textColor}`;

    if (variant === "primary") {
      classNames += ` bg-primary ${fullWidth ? "w-full" : width}`;
    } else if (variant === "secondary") {
      classNames += ` bg-secondary ${fullWidth ? "w-full" : width}`;
    } else if (variant === "custom") {
      classNames += ` ${bgColor} ${borderColor} ${
        fullWidth ? "w-full" : width
      }`;
    } else if (variant === "gradient") {
      classNames += ` bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full ${
        fullWidth ? "w-full" : width
      }`;
    }

    return classNames;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${getClassNames()} ${className}`}
    >
      {loading ? <ButtonSpinner /> : text}
    </button>
  );
};

export default Button;
