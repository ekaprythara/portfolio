import type { LinkProps } from "../../types/data-types";

const Link = ({
    variant = "primary",
    type = "link",
    href,
    className = "",
    children,
}: LinkProps) => {
    const styleByType: Record<"link" | "button", string> = {
        link: "text-neutral-300 hover:text-[#FACC14] transition-colors duration-200 inline-flex items-center gap-1.5",
        button: "py-3 px-8 inline-flex items-center justify-center font-medium transition-all duration-200 hover:text-[#FACC14] transition-colors duration-200",
    };

    const variantStyle: Record<"primary" | "outline" | "ghost", string> = {
        primary:
            "bg-[#FACC14] text-neutral-800 hover:text-neutral-800 hover:bg-[#FACC14]/90",
        outline:
            "bg-transparent text-white border border-neutral-700 hover:border-[#FACC14]",
        ghost: "bg-transparent text-neutral-300 hover:text-white",
    };

    const combinedStyles =
        type === "button"
            ? `${styleByType["button"]} ${variantStyle[variant]}`
            : styleByType["link"];

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${combinedStyles} ${className}`}
        >
            {children}
        </a>
    );
};

export default Link;
