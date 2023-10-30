import { BsGit, BsGithub } from "react-icons/bs";
import { SiVisualstudiocode } from "react-icons/si";

const ProfileTools = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-sm md:text-base lg:text-lg">Tools</h2>
      <div className="flex flex-row flex-wrap gap-2 md:gap-3">
        <div className="bg-[#222] p-3 rounded-lg flex items-center justify-center text-[#0078d7]  transition-colors duration-500">
          <SiVisualstudiocode
            size={38}
            className="w-[30px] h-[30px] md:w-auto md:h-auto"
          />
        </div>
        <div className="bg-[#222] p-3 rounded-lg flex items-center justify-center text-[#f34f29]  transition-colors duration-500">
          <BsGit size={40} className="w-[30px] h-[30px] md:w-auto md:h-auto" />
        </div>
        <div className="bg-[#222] p-3 rounded-lg flex items-center justify-center text-[#ffffff]  transition-colors duration-500">
          <BsGithub
            size={40}
            className="w-[30px] h-[30px] md:w-auto md:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileTools;
