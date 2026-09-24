export type MainLayoutProps = {
    children: React.ReactNode;
};

export type ButtonProps = {
    className?: string;
    children: React.ReactNode;
    variant?: "primary" | "outline";
    onClick?: () => void;
};

export type LinkProps = {
    children: React.ReactNode;
    type?: "link" | "button";
    variant?: "primary" | "outline" | "ghost";
    href: string;
    className?: string;
};
