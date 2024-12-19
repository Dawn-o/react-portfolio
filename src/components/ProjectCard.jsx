import { useState } from "react";
import PropTypes from "prop-types";
import { TechBadge } from "./TechBadge";

export const ProjectCard = ({ title, image, tech }) => {
  const [isLoading, setIsLoading] = useState(true);
  const techArray = tech.split(",").map((t) => t.trim());

  return (
    <div className="w-full cursor-pointer">
      <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
        <img
          src={image}
          alt={title}
          className={`transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            Loading...
          </div>
        )}
        <div className="absolute inset-0 bg-primary/90 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="p-6 text-center">
            <h4 className="text-xl font-bold font-secondary text-white mb-2">
              {title}
            </h4>
            <div className="flex flex-wrap justify-center gap-1 mb-6">
              {techArray.map((t, index) => (
                <TechBadge key={index} tech={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
