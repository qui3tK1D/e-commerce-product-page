import React from "react";

const SliderBtn = ({ children, variants, ...rest }) => {
  return (
    <button
      className={`w-10 h-10 bg-white text-2xl rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 shadow-xl ${variants}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default SliderBtn;
