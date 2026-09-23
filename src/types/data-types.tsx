export type MainLayoutProps = {
  children: React.ReactNode;
};

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export type LinkProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href: string;
  className?: string;
};
