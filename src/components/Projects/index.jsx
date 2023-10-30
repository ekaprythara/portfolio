import { BsChevronDoubleDown } from "react-icons/bs";
import { PROJECTS as projects } from "../../utils/constants";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center pt-20 text-white"
    >
      <h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3bc9db]"
        data-aos="fade-up"
      >
        My Projects
      </h1>
      {projects.length === 0 && (
        <p className="mt-10 text-center" data-aos="fade-up">
          Proyek yang ditambahkan akan tampil disini.
        </p>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-10">
        {projects.slice(0, 6).map((project) => (
          <div key={project.id}>
            <ProjectItem
              title={project.title}
              image={project.image}
              viewLink={project.viewLink}
              githubLink={project.githubLink}
              description={project.description}
              techStack={project.techStack}
              animationDelay={project.animationDelay}
            />
          </div>
        ))}
      </div>
      {projects.length > 6 && (
        <span
          className="text-center mt-10"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <button>
            <BsChevronDoubleDown
              size={27}
              color="#3bc9db"
              className="animate-bounce"
            />
          </button>
        </span>
      )}
    </div>
  );
};

export default Projects;
