import type { LinkProps } from "../../types/data-types";

const Link = ({
  variant = "primary",
  href,
  className,
  children,
}: LinkProps) => {
  const baseStyle = "py-3 px-8 rounded-md text-sm";

  const variantStyle: Record<"primary" | "outline", string> = {
    primary: "bg-[#FACC14] text-neutral-800 hover:bg-[#FACC14]/90",
    outline:
      "bg-transparent text-white border border-neutral-800 hover:bg-[#181818]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyle} ${variantStyle[variant]} ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
