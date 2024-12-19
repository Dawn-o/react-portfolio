import { SkillCard } from "../components/SkillCard";
const skills = [
  {
    name: "jQuery",
    image: "images/1.png",
    level: "Intermediate",
    category: "Frontend",
  },
  {
    name: "Bootstrap",
    image: "images/2.png",
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "CSS",
    image: "images/3.png",
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "HTML",
    image: "images/4.png",
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    image: "images/js.webp",
    level: "Intermediate",
    category: "Frontend",
  },
  {
    name: "Tailwind",
    image: "images/tw.png",
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "PHP",
    image: "images/php.svg",
    level: "Advanced",
    category: "Backend",
  },
  {
    name: "Laravel",
    image: "images/Laravel.png",
    level: "Intermediate",
    category: "Backend",
  },
  {
    name: "Python",
    image: "images/python.png",
    level: "Advanced",
    category: "Backend",
  },
  {
    name: "Django",
    image: "images/django.png",
    level: "Intermediate",
    category: "Backend",
  },
  {
    name: "Dart",
    image: "images/dart.png",
    level: "Intermediate",
    category: "Mobile",
  },
  {
    name: "Flutter",
    image: "images/flutter.png",
    level: "Intermediate",
    category: "Mobile",
  },
];

export default function Profile() {
  return (
    <section id="profile" className="section py-20">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-gradient font-secondary text-3xl font-bold mb-4">
            Programming Language Skills
          </h2>
          <p className="font-primary font-medium text-lg max-w-2xl mx-auto">
            Specialized in Backend Development with expertise in various
            programming languages and frameworks, while maintaining frontend
            development capabilities.
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
