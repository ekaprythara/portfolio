import { SOCIALS } from "../utils/contants";

const SocialLink = () => {
  return (
    <div className="text-sm text-neutral-400 flex gap-5">
      {SOCIALS.map((social) => (
        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FACC14] tracking-wide"
          key={social.label}
        >
          {social.label}
        </a>
      ))}
    </div>
  );
};

export default SocialLink;
