import type { ButtonProps } from "../../types/data-types";

const Button = ({ variant = "primary", children }: ButtonProps) => {
  const baseStyle = "py-3 px-8 rounded-md text-sm text-sm";

  const variantStyle: Record<"primary" | "outline", string> = {
    primary: "bg-[#FACC14] text-neutral-800 hover:bg-[#FACC14]/90",
    outline: "bg-transparent text-white border border-neutral-800",
  };

  return (
    <button type="button" className={`${baseStyle} ${variantStyle[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
