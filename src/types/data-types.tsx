export type MainLayoutProps = {
    children: React.ReactNode;
};

export type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "outline";
};

export type LinkProps = {
    children: React.ReactNode;
    type?: "link" | "button";
    variant?: "primary" | "outline" | "ghost";
    href: string;
    className?: string;
};
