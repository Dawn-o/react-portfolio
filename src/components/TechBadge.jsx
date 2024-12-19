import PropTypes from "prop-types";

export const TechBadge = ({ tech }) => (
  <span className="inline-block px-5 py-2 font-primary text-sm rounded-full bg-white/20 text-white hover:bg-secondary transition-colors duration-300">
    {tech.trim()}
  </span>
);

TechBadge.propTypes = {
  tech: PropTypes.string.isRequired,
};
