import { ProjectCard } from "../components/ProjectCard";
import projectsData from "../data/projects.json";

const { projects } = projectsData;

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto max-w-[1200px] px-4 relative">
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-4xl font-bold font-secondary text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-xl font-primary font-medium max-w-2xl mx-auto">
            A showcase of my technical projects and contributions
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <span className="text-gradient text-5xl font-primary">
            0{projects.length}
          </span>
          <p className="font-primary font-medium mt-2">Completed Projects</p>
        </div>
      </div>
    </section>
  );
}
