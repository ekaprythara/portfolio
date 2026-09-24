import type { MainLayoutProps } from "../types/data-types";

const MainLayout = ({ children }: MainLayoutProps) => {
    return <div className="max-w-300 mx-auto px-5 lg:px-16">{children}</div>;
};

export default MainLayout;
