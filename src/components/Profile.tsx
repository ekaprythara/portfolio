import { BsEnvelope, BsFileEarmarkText, BsWhatsapp } from "react-icons/bs";
import Link from "./ui/Link";
import SocialLink from "./SocialLink";

const Profile = () => {
    return (
        <div className="flex flex-col gap-8 py-24">
            <h1 className="text-6xl text-white font-garamond max-w-4xl">
                Let's build something
                <br />
                meaningful together.
            </h1>
            <div className="grid grid-cols-8">
                <div className="flex flex-col gap-8 col-span-3">
                    <img
                        src="https://ekapriyanthara.vercel.app/assets/profile-DiUHuhFe.jpg"
                        height={200}
                        width={200}
                        className="rounded-full border border-[#FACC14]"
                    />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-4xl font-garamond">
                            Eka Priyanthara
                        </h2>
                        <p className="text-[#FACC14] uppercase tracking-widest text-sm">
                            Full-stack Developer
                        </p>
                    </div>

                    <SocialLink />
                </div>

                <div className="col-span-5 flex flex-col justify-center gap-8">
                    <p className="text-xl tracking-wide text-neutral-400">
                        Whether you're exploring an idea, improving an existing
                        product, or simply want to connect, I'd love to hear
                        from you.
                    </p>
                    <div className="flex gap-5">
                        <Link
                            href="mailto:ekapriyanthara@gmail.com"
                            className="flex items-center gap-2"
                        >
                            <BsEnvelope size={18} />
                            <span>Email Me</span>
                        </Link>

                        <Link
                            variant="outline"
                            href="https://wa.me/6285175007778?text=Hi%20Eka%2C%20I%20found%20your%20portfolio%20and%20would%20love%20to%20connect."
                            className="flex items-center gap-2"
                        >
                            <BsWhatsapp size={18} />
                            <span>WhatsApp</span>
                        </Link>

                        <Link
                            variant="outline"
                            href="#"
                            className="flex items-center gap-2"
                        >
                            <BsFileEarmarkText size={18} />
                            <span>My Resume</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
