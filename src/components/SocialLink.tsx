import { SOCIALS } from "../utils/contants";
import Link from "./ui/Link";

const SocialLink = () => {
    return (
        <div className="text-sm text-neutral-400 flex gap-5">
            {SOCIALS.map((social) => (
                <Link
                    href={social.href}
                    key={social.label}
                    className="text-neutral-400"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {social.label}
                </Link>
            ))}
        </div>
    );
};

export default SocialLink;
