import Button from "./ui/Button";

const NAV_LINKS = [
    {
        label: "About",
        href: "#",
    },
    {
        label: "Work",
        href: "#work",
    },
    {
        label: "Experience",
        href: "#",
    },
];

const Header = () => {
    return (
        <header className="bg-[#1A1A1A]/70 fixed top-0 left-0 right-0 backdrop-blur-sm z-50">
            <div className="h-[10dvh] flex items-center justify-between max-w-300 px-16 mx-auto">
                <h1 className="font-garamond text-4xl">
                    <a href="#profile">EP</a>
                </h1>
                <nav className="text-sm tracking-widest text-neutral-400">
                    <ul className="flex gap-8">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Button>Let's Talk</Button>
            </div>
        </header>
    );
};

export default Header;
