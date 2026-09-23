import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A]">
      <div className="h-[20dvh] flex items-center justify-between max-w-300 px-16 mx-auto">
        <h1 className="font-garamond text-4xl">
          <a href="#">EP</a>
        </h1>

        <div className="text-neutral-400 text-base">Built with curiosity.</div>

        <SocialLink />
      </div>
    </footer>
  );
};

export default Footer;
