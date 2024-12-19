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

export default function Portfolio() {
  return (
    <section id="portfolio" className="section" aria-label="Portfolio">
      <div className="container mx-auto max-w-[1200px] px-3 pt-3 pb-20">
        <div
          className="flex flex-col lg:align-center lg:flex-row justify-between mb-[50px]"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="order-2 lg:order-1 mt-5">
            <h2 className="text-secondary font-secondary text-3xl">
              Recent Work
            </h2>
            <p className="text-gradient font-primary max-w-[700px] mx-auto text-xl">
              Projects that I have created and worked on so far
            </p>
          </div>
          <div className="order-1 lg:order-2 text-center">
            <span className="text-gradient font-primary max-w-[700px] mx-auto text-5xl">
              04
            </span>
            <p className="font-primary mt-2">Completed Projects</p>
          </div>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
