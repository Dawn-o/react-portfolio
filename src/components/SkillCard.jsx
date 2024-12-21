/* eslint-disable react/prop-types */

export const SkillCard = ({ name, image, level, index }) => {
  const levelPercentage = {
    'Beginner': '33%',
    'Intermediate': '66%',
    'Advanced': '100%'
  };

  return (
    <div 
      className="w-full transform transition-all hover:scale-105 cursor-pointer"
      data-aos="zoom-in"
      data-aos-delay={index * 100}
      data-aos-duration="800"
    >
      <div className="bg-white/10 backdrop-blur-sm h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 object-contain filter brightness-90 group-hover:brightness-100 transition-all" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 to-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-center text-white p-4">
            <h4 className="font-secondary font-bold text-lg mb-2">{name}</h4>
            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-white h-full rounded-full transition-all duration-500"
                style={{ width: levelPercentage[level] }}
              />
            </div>
            <p className="text-sm mt-2 font-primary font-medium">{level}</p>
          </div>
        </div>
      </div>
    </div>
  );
};