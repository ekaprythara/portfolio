import { BsList, BsXLg } from "react-icons/bs";
import Button from "./ui/Button";
import { NAV_LINKS } from "../utils/contants";
import { useState } from "react";
import Link from "./ui/Link";

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <header className="bg-[#1A1A1A]/70 fixed top-0 left-0 right-0 backdrop-blur-sm z-40">
                <div className="h-[10dvh] flex items-center justify-between max-w-300 px-5 lg:px-16 mx-auto">
                    <h1 className="font-garamond text-4xl">
                        <a href="#home">EP</a>
                    </h1>
                    <nav className="text-sm tracking-widest text-neutral-400 hidden md:block">
                        <ul className="flex gap-8">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Link
                        href="#profile"
                        className="hidden md:block"
                        type="button"
                    >
                        Let's Talk
                    </Link>
                    <Button
                        variant="outline"
                        className="md:hidden"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <BsList size={20} />
                    </Button>
                </div>
            </header>

            {/* Backdrop / Overlay dengan transisi Opacity */}
            <div
                className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
                    isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsOpen(false)} // Klik di luar sidebar untuk menutup
            >
                {/* Panel Sidebar dengan transisi Slide (translate-x) */}
                <div
                    className={`bg-[#131313] fixed top-0 right-0 bottom-0 h-full w-8/12 max-w-sm sm:w-80 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                    onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam sidebar ikut menutup
                >
                    {/* Tombol Close */}
                    <div className="p-5 w-full flex justify-end text-white cursor-pointer">
                        <BsXLg
                            size={20}
                            className="hover:text-neutral-300 transition-colors"
                            onClick={() => setIsOpen(false)}
                        />
                    </div>

                    {/* Navigasi / Menu List */}
                    <nav className="px-8 py-4 text-sm tracking-widest text-neutral-400">
                        <ul className="flex flex-col gap-6">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="hover:text-white transition-colors block py-1"
                                        onClick={() => setIsOpen(false)} // Tutup otomatis saat link diklik
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;
