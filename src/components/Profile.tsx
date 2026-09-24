import { BsEnvelope, BsFileEarmarkText, BsWhatsapp } from "react-icons/bs";
import Link from "./ui/Link";
import SocialLink from "./SocialLink";
import profileImg from "../assets/profile/profile.jpg";

const Profile = () => {
    return (
        <div className="flex flex-col gap-8 pb-[15dvh]">
            <h1
                id="profile"
                className="text-4xl sm:text-6xl text-white font-garamond max-w-4xl pt-[15dvh] leading-tight"
            >
                Let's build something
                <br />
                meaningful together.
            </h1>

            {/* Menggunakan Flex di Mobile, Grid 8 kolom di layar LG ke atas */}
            <div className="flex flex-col lg:grid lg:grid-cols-8 gap-10 lg:gap-5 items-start lg:items-center">
                {/* Bagian Kiri (Foto & Identitas) */}
                <div className="flex flex-col gap-6 lg:col-span-3 w-full items-center lg:items-start">
                    <img
                        src={profileImg}
                        alt="Eka Priyanthara"
                        height={200}
                        width={200}
                        className="rounded-full border border-[#FACC14] w-36 h-36 lg:w-48 lg:h-48 object-cover"
                    />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl sm:text-4xl font-garamond text-white text-center lg:text-start">
                            Eka Priyanthara
                        </h2>
                        <p className="text-[#FACC14] uppercase tracking-widest text-xs sm:text-sm text-center lg:text-start">
                            Web Developer
                        </p>
                    </div>

                    <SocialLink />
                </div>

                {/* Bagian Kanan (Deskripsi & Tombol Aksi) */}
                <div className="lg:col-span-5 flex flex-col justify-center gap-6 lg:gap-8 w-full">
                    <p className="text-base sm:text-lg tracking-wide text-neutral-400">
                        Whether you're exploring an idea, improving an existing
                        product, or simply want to connect, I'd love to hear
                        from you.
                    </p>

                    {/* Tombol aksi: Menumpuk vertikal di HP, berjejer ke samping di layar md ke atas */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            type="button"
                            href="mailto:ekapriyanthara@gmail.com"
                            className="flex items-center justify-center gap-2 w-full sm:w-auto"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsEnvelope size={18} />
                            <span>Email Me</span>
                        </Link>

                        <Link
                            type="button"
                            variant="outline"
                            href="https://wa.me/6285175007778?text=Hi%20Eka%2C%20I%20found%20your%20portfolio%20and%20would%20love%20to%20connect."
                            className="flex items-center justify-center gap-2 w-full sm:w-auto"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsWhatsapp size={18} />
                            <span>WhatsApp</span>
                        </Link>

                        <Link
                            type="button"
                            variant="outline"
                            href="#"
                            className="flex items-center justify-center gap-2 w-full sm:w-auto"
                            target="_blank"
                            rel="noopener noreferrer"
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
