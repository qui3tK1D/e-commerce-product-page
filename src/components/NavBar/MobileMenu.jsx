import React from "react";
import ModalOverlay from "../UI/ModalOverlay";
import NavLinks from "./NavLinks";
import { CloseSvg } from "../Svg";
import { AnimatePresence, motion } from "framer-motion";

const container = {
  hidden: { x: "-100%", opacity: 0.5 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  out: {
    x: "-100%",
    transition: {
      duration: 0.4,
    },
  },
};

const child = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const MobileMenu = ({ isMobileMenuOpen, menuClose }) => {
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <ModalOverlay onClick={menuClose}>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="out"
            className="w-3/5 min-h-screen bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="group" onClick={menuClose}>
              <CloseSvg />
            </button>
            <NavLinks
              styleContainer="navlinks__container-mobile"
              child={child}
            />
          </motion.div>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
