import React from "react";

const Button = ({ children, styles, type, ...rest }) => {
  return (
    <button className={styles || ""} type={type || "button"} {...rest}>
      {children}
    </button>
  );
};

export default Button;
