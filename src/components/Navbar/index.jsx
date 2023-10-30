import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Spin as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-0 top-0 right-0 bg-[#222] bg-opacity-95 z-50">
      <div className="px-5 md:px-10 lg:px-20 flex justify-between items-center h-16">
        <h1 className="font-mono font-bold text-xl">
          <span className="text-primary">{`{`}</span>
          ekaprythara
          <span className="text-primary">{`}`}</span>
        </h1>
        <button className="block lg:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={27} />
        </button>
        <ul className="hidden lg:flex lg:flex-row lg:gap-5">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* for smaller screen size */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-16 bg-[#333] z-50">
            <ul className="flex flex-col justify-center items-center py-5 gap-5">
              <li>
                <a href="#home" onClick={onClickHandler}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={onClickHandler}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={onClickHandler}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={onClickHandler}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
