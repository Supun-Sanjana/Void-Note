import React from 'react';

type ButtonProps = {
  name: string;
};

const ButtonComp = ({ name }: ButtonProps) => {
  return (
    <div>
      <button className="active:bg-[#676BEB]  w-[107px] h-[31px] rounded-[5px] text-white ">
        {name}
      </button>
    </div>
  );
};

export default ButtonComp;
