import { useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibleHandler = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 750) {
      setVisible(true);
    } else if (scrolled <= 750) {
      setVisible(false);
    }
  };

  const onClickHandler = () => {
    window.scroll({ top: "0", behavior: "auto" });
  };

  window.addEventListener("scroll", toggleVisibleHandler);

  return (
    <button
      className={`fixed -right-20 bottom-20 p-2 rounded-full bg-blend-soft-light text-white bg-[#333] transition-all duration-300 ease-in-out z-50 ${
        visible && "right-2 md:right-5"
      }`}
      onClick={onClickHandler}
    >
      <HiArrowUp size={25} />
    </button>
  );
};

export default ScrollToTop;
