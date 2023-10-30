import ProfileInfo from "./ProfileInfo";
import ProfilePicture from "./ProfilePicture";
import ParticlesBg from "particles-bg";

const Home = () => {
  return (
    <>
      <div className="h-screen pt-16 w-full absolute block lg:hidden">
        <ParticlesBg
          color={(["#ffffff"], ["#ffffff"])}
          num={40}
          type="cobweb"
        />
      </div>
      <div className="h-screen pt-16 w-full absolute hidden lg:block">
        <ParticlesBg
          color={(["#ffffff"], ["#ffffff"])}
          num={80}
          type="cobweb"
        />
      </div>
      <div className="bg-[#111] px-5 md:px-10 lg:px-15 xl:px-20">
        <section
          id="home"
          className="grid grid-rows-[0.8fr_1.2fr] grid-cols-1 lg:grid-rows-1 lg:grid-cols-[1.2fr_0.8fr] w-full text-white pt-16 h-screen"
        >
          <ProfileInfo />
          <ProfilePicture />
        </section>
      </div>
    </>
  );
};

export default Home;
