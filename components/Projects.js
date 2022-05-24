import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
const Projects = () => {
  return (
    <section className="bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-15 heading-margin-top md:text-left">
          Projects.
        </h1>
      </div>
      <div className="bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {projects.map((proj, idx) => (
            <ProjectCard
              key={proj.title}
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              description={proj.description}
              technology={proj.technology}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
