import { useState } from "react";
import { SkillCard } from "../components/SkillCard";
import { motion, AnimatePresence } from "framer-motion";
import skillsData from "../data/skills.json";

const { skills } = skillsData;

export default function Skills() {
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
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto max-w-[1200px] px-4 relative">
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-gradient font-secondary text-3xl font-bold mb-4">
            Programming Language Skills
          </h2>
          <p className="font-primary font-medium text-lg max-w-2xl mx-auto px-4">
            Specialized in Backend Development with expertise in various
            programming languages and frameworks, while maintaining frontend
            development capabilities.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-2"
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
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
