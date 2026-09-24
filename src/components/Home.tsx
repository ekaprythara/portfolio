import Link from "./ui/Link";

const Home = () => {
    return (
        <div id="home" className="h-dvh flex flex-col justify-center">
            <div className="pt-[10dvh] flex flex-col gap-8">
                <div className="flex gap-3 items-center">
                    <div className="rounded-full bg-[#FACC14] animate-pulse w-2 h-2 shrink-0 aspect-square"></div>
                    <span className="text-[#FACC14] text-xs sm:text-sm tracking-widest uppercase">
                        Bali, Indonesia &middot; Available for Collaborations
                    </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl text-white font-garamond max-w-4xl leading-tight">
                    Hi, I'm Eka Priyanthara.
                    <br />
                    I'm a Web Developer who loves turning ideas into websites.
                </h1>

                <p className="text-base sm:text-lg lg:text-xl leading-relaxed tracking-wide text-neutral-400 max-w-2xl">
                    Currently learning, building, and exploring new things in
                    web development.
                </p>

                {/* Tombol dibuat fleksibel: menumpuk di HP agar tidak gepeng, menyamping di layar besar */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        type="button"
                        href="#work"
                        className="w-full sm:w-auto text-center"
                    >
                        View Selected Work
                    </Link>
                    <Link
                        type="button"
                        href="#profile"
                        variant="outline"
                        className="w-full sm:w-auto text-center"
                    >
                        Let's Talk
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
