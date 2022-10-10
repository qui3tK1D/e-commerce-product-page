import React from "react";
import { navLinks } from "../../constants";
import { motion } from "framer-motion";

const NavLinks = ({ styleContainer, styleLink, child }) => {
  return (
    <ul className={styleContainer}>
      {navLinks.map((navLink) => (
        <motion.li key={navLink.id} className={styleLink} variants={child}>
          <a href={`#${navLink.name}`}>{navLink.name}</a>
        </motion.li>
      ))}
    </ul>
  );
};

export default React.memo(NavLinks);
