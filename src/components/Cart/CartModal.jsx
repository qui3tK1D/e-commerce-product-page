import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import CartStats from "./CartStats";

const container = {
  hidden: { opacity: 0.8, scale: 0.7 },
  visible: { opacity: 1, scale: 1 },
  out: {
    opacity: 0,
    scale: 0.7,
  },
};

const CartModal = ({ isModalOpen, handleModal }) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="cart__modal-overlay" onClick={handleModal}>
          <motion.div
            initial="hidden"
            variants={container}
            animate={isModalOpen ? "visible" : ""}
            exit="out"
            className="cart__modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="cart__title">Cart</h3>
            <div className="border-b"></div>
            <CartStats />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
