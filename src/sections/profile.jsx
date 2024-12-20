import { useState } from "react";
import { SkillCard } from "../components/SkillCard";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(skills.map((skill) => skill.category.toLowerCase())),
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter(
          (skill) => skill.category.toLowerCase() === activeCategory
        );

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
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="fade-up"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
        font-primary
        px-6 py-2 rounded-full 
        transition-all duration-300
        backdrop-blur-sm
        border border-white/10
        hover:border-secondary/50
        ${
          activeCategory === category
            ? "bg-gradient-to-r from-secondary to-primary text-white scale-110 shadow-lg shadow-secondary/20"
            : "bg-white/20 hover:bg-white/40"
        }
      `}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
              <span className="ml-2 text-sm">
                (
                {category === "all"
                  ? skills.length
                  : skills.filter((s) => s.category.toLowerCase() === category)
                      .length}
                )
              </span>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
