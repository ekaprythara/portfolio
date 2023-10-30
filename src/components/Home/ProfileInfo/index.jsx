// import Button from "../../Button";
import { TypeAnimation } from "react-type-animation";
import Button from "../../Button";

const index = () => {
  return (
    <div
      className="flex flex-col justify-center items-start gap-10"
      data-aos="fade-right"
    >
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl md:mt-4">
          Hello, I&apos;m
        </h1>
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">
          <span className="text-[#3bc9db]">Eka </span>
          Priyanthara
        </h2>
        <TypeAnimation
          sequence={["Frontend Web Developer"]}
          wrapper="p"
          speed={300}
          className="text-xl md:text-base lg:text-2xl ms-1 inline-block"
        />
        <div className="animate-bounce mt-5 ms-1">
          <a href="#contact">
            <Button title="Unduh CV" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
