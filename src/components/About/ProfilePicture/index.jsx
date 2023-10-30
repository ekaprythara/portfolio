import wallpaper from "../../../assets/wallpaper.jpg";
import Tilt from "react-parallax-tilt";

const ProfilePicture = () => {
  return (
    <div className="max-w-[520px] h-auto p-5">
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} gyroscope={true}>
        <img
          src={wallpaper}
          alt="Profile Picture"
          width={500}
          height={250}
          className="rounded-3xl w-9/12 m-auto"
        />
      </Tilt>
    </div>
  );
};

export default ProfilePicture;
