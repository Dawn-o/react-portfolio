import { ProjectCard } from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Exceed | Guitar E-Commerce",
    image: "images/portfolio1.png",
    tech: "HTML, PHP, JavaScript & jQuery, Tailwind CSS",
  },
  {
    id: 2,
    title: "StoveGuard",
    image: "images/portfolio2.png",
    tech: "HTML, PHP, JavaScript & jQuery, Tailwind CSS",
  },
  {
    id: 3,
    title: "RSUD",
    image: "images/portfolio3.png",
    tech: "HTML, Python, Django, Tailwind CSS",
  },
  {
    id: 4,
    title: "SKALA",
    image: "images/portfolio4.png",
    tech: "HTML, PHP, JavaScript & jQuery, Laravel, Tailwind CSS",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto max-w-[1200px] px-4">
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
