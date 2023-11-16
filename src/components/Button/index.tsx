import React from "react";

const shapes = { circle: "rounded-[50%]", round: "rounded-md" } as const;
const variants = {
  fill: {
    indigo_50: "bg-indigo-50 text-black-900",
    white_A700: "bg-white-A700",
    blue_A700: "bg-blue-A700 text-white-A700",
    blue_50: "bg-blue-50",
  },
  outline: {
    blue_gray_400:
      "border border-blue_gray-400 border-solid text-blue_gray-400",
  },
  gradient: { black_900_66_black_900_66: "bg-gradient  text-white-A700" },
} as const;
const sizes = {
  xs: "p-0.5",
  sm: "p-1.5",
  md: "px-2.5 py-[13px]",
  lg: "p-3.5",
  xl: "p-[17px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
