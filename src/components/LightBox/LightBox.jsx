import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ProductImages from "../ProductImages/ProductImages";
import { CloseSvg } from "../Svg";
import ModalOverlay from "../UI/ModalOverlay";

const container = {
  hidden: { scale: 0.5 },
  visible: { scale: 1 },
  out: { scale: 0.8 },
};

const LightBox = ({ closeLightBox, isLightBoxOpen = false }) => {
  return (
    <AnimatePresence>
      {isLightBoxOpen && (
        <ModalOverlay
          variants="md:flex justify-center items-center hidden"
          onClick={closeLightBox}
          delayModal={0}
        >
          <motion.div
            className="max-w-sm flex flex-col space-y-4"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="out"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="group self-end" onClick={closeLightBox}>
              <CloseSvg fill="#fff" style="lightbox__svg" />
            </button>
            <ProductImages isLightBoxOpen={isLightBoxOpen} />
          </motion.div>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default LightBox;
