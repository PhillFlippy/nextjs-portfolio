import projects from "../data/projects";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="bg-gray-800">
      <Heading>Projects.</Heading>
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
