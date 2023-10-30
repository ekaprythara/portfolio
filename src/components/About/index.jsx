import ProfilePicture from "./ProfilePicture";
import ProfileAbout from "./ProfileAbout";
import ProfileSkills from "./ProfileSkills";
import ProfileTools from "./ProfileTools";

const About = () => {
  return (
    <div id="about" className="flex flex-col justify-center items-center pt-20">
      <h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3bc9db]"
        data-aos="fade-up"
      >
        About Me
      </h1>
      <div className="text-lg grid grid-cols-none grid-rows-1 lg:grid-cols-[0.8fr_1.2fr] lg:grid-rows-none gap-5 lg:gap-10 items-start text-white mt-10">
        <div
          className="flex flex-col justify-center items-center"
          data-aos="fade-right"
        >
          <ProfilePicture />
        </div>
        <div
          className="grid grid-rows-[0.6fr_1.4fr] grid-cols-1 gap-5 h-full text-sm md:text-base lg:text-lg"
          data-aos="fade-left"
        >
          <ProfileAbout />
          <div className="flex flex-col gap-5">
            <ProfileSkills />
            <ProfileTools />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
