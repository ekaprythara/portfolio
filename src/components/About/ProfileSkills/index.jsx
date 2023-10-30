import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";

const ProfileSkills = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-sm md:text-base lg:text-lg">Skills</h2>
      <div className="flex flex-row flex-wrap gap-2 md:gap-3">
        <div className="bg-[#222] p-3 rounded-lg flex items-center justify-center text-[#e34c26] transition-colors duration-500">
          <SiHtml5
            size={40}
            className="w-[30px] h-[30px] md:w-auto md:h-auto"
          />
        </div>
        <div className="bg-[#222] p-3 rounded-lg flex items-center justify-center text-[#264de4] transition-colors duration-500">
          <SiCss3
            size={40}
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-auto lg:h-auto"
          />
        </div>
        <div className="bg-[#222] p-3 rounded-lg flex items-center justify-center text-[#cc6699] transition-colors duration-500">
          <SiSass
            size={40}
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-auto lg:h-auto"
          />
        </div>
        <div className="bg-[#222] p-3 rounded-lg flex items-center justify-center text-[#f0db4f] transition-colors duration-500">
          <SiJavascript
            size={40}
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-auto lg:h-auto"
          />
        </div>
        <div className="bg-[#222] p-3 rounded-lg flex items-center justify-center text-[#61dafb] transition-colors duration-500">
          <SiReact
            size={40}
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-auto lg:h-auto"
          />
        </div>
        <div className="bg-[#222] p-3 rounded-lg flex items-center justify-center text-[#3490dc] transition-colors duration-500">
          <SiTailwindcss
            size={40}
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-auto lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSkills;
