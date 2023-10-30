import {
  BsCaretRightFill,
  BsFillEnvelopeFill,
  BsFillGeoAltFill,
  BsFillTelephoneFill,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="min-h-16 bg-[#222] px-5 md:px-10 lg:px-20 py-5">
      <div className="grid grid-cols-1 grid-rows-3 gap-8 lg:grid-cols-3 lg:grid-rows-1 pb-5 lg:gap-0">
        <div className="flex flex-col gap-3 px-2 lg:px-10">
          <h1 className="text-2xl text-primary">
            Eka Priyanthara&apos;s Portfolio
          </h1>
          <p>Terima kasih telah mengunjungi web portfolio pribadi saya.</p>
        </div>
        <div className="flex flex-col gap-3 px-2 lg:px-10">
          <h1 className="text-2xl text-primary">Quick Links</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#home"
                className="flex items-center hover:text-[#3bc9db] w-fit gap-2"
              >
                <BsCaretRightFill size={15} />
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="flex items-center hover:text-[#3bc9db] w-fit gap-2"
              >
                <BsCaretRightFill size={15} />
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="flex items-center hover:text-[#3bc9db] w-fit gap-2"
              >
                <BsCaretRightFill size={15} />
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex items-center hover:text-[#3bc9db] w-fit gap-2"
              >
                <BsCaretRightFill size={15} />
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 px-2 lg:px-10">
          <h1 className="text-2xl text-primary">Contact Info</h1>
          <div className="flex flex-col gap-2">
            <a
              href="tel:+6285175088570"
              className="flex gap-4 items-center hover:text-[#3bc9db] w-fit"
            >
              <BsFillTelephoneFill size={18} />
              <span>+62 85175088570</span>
            </a>
            <a
              href="mailto:ekapriyanthara072@gmail.com"
              className="flex gap-4 items-center hover:text-[#3bc9db] w-fit"
            >
              <BsFillEnvelopeFill size={18} />
              <span>ekapriyanthara072@gmail.com</span>
            </a>
            <a
              href="https://goo.gl/maps/xWfsCxJpKnJmL2kM7"
              target="_blank"
              rel="noreferrer"
              className="flex gap-4 items-center hover:text-[#3bc9db] w-fit"
            >
              <BsFillGeoAltFill size={18} />
              <span>Denpasar, Bali</span>
            </a>
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <p className="text-center">
        Made with <span className="text-red-600">&#10084;</span> by{" "}
        <span className="text-primary">Eka Priyanthara</span>
      </p>
    </footer>
  );
};

export default Footer;
