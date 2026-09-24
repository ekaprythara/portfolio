import Button from "./ui/Button";

const Home = () => {
    return (
        <div className="h-dvh flex flex-col gap-8 justify-center">
            <div className="flex gap-3 items-center">
                <div className="rounded-full bg-[#FACC14] animate-pulse w-2 h-2"></div>
                <span className="text-[#FACC14] text-sm tracking-widest uppercase">
                    Bali, Indonesia &middot; Available for Collaborations
                </span>
            </div>

            <h1 className="text-6xl text-white font-garamond max-w-4xl">
                Hi, I'm Eka Priyanthara.
                <br />
                I'm a Web Developer who loves turning ideas into websites.
            </h1>
            <p className="text-xl leading-relaxed tracking-wide text-neutral-400 max-w-2xl">
                Currently learning, building, and exploring new things in web
                development.
            </p>
            <div className="flex gap-4">
                <Button>View Selected Work</Button>
                <Button variant="outline">Let's Talk</Button>
            </div>
        </div>
    );
};

export default Home;
