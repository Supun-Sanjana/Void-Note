import React from 'react';

const FeaturesCard = ({ icon, title, description, iconBg }) => {
  return (
    <div className='flex flex-col space-y-4 backdrop-blur-md  border border-white/10 
    rounded-xl p-6 hover:bg-[#010018] hover:border-white/20 transition-all duration-300 
    hover:transform hover:scale-105 group bg-[#0C0C2F] '>
      
      
        <img src={icon} alt="icon" className='w-11 h-11' />
      
      
      <h3 className='text-white text-xl font-semibold leading-tight'>{title}</h3>
      <p className='text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300'>
        {description}
      </p>
    </div>
  );
};

export default FeaturesCard;