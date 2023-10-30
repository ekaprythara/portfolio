import imgUrl from "../../../assets/profile.png";
import Tilt from "react-parallax-tilt";

const index = () => {
  return (
    <div
      className="flex justify-center items-start lg:items-center"
      data-aos="fade-left"
    >
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} gyroscope={true}>
        <div className="max-h-[500px] max-w-[500px] p-5">
          <img
            src={imgUrl}
            alt="Profile Picture"
            width={450}
            height={450}
            className="bg-slate-200 rounded-full w-8/12 md:w-9/12 lg:w-10/12 m-auto"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default index;
