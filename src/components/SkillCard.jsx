import PropTypes from "prop-types";

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export const SkillCard = ({ name, image, level }) => (
  <div className="w-full transform transition-all hover:scale-105">
    <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
      <img src={image} alt={name} className="w-16 h-16 object-contain" />
      <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center text-white">
          <h4 className="font-secondary font-bold">{name}</h4>
          <p className="text-sm mt-1">{level}</p>
        </div>
      </div>
    </div>
  </div>
);
