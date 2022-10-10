import React from "react";
import { motion } from "framer-motion";

const ModalOverlay = ({
  children,
  onClick,
  variants = "",
  delayModal = 0.5,
}) => {
  return (
    <motion.div
      className={`modal__overlay ${variants}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { delay: delayModal },
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default ModalOverlay;
