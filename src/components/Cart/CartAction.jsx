import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { CartSvg } from "../Svg";
import CartModal from "./CartModal";

const badge = {
  hidden: { scaleX: 0.2 },
  visible: {
    scaleX: 1,
    transition: { type: "spring", bounce: 0.7 },
  },
  out: { opacity: 0, scale: 0 },
};

const badgeNum = {
  hidden: { y: -10 },
  visible: { y: 0 },
};

const CartAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalQuantity = useSelector((store) => store.cart.items.totalQuantity);

  return (
    <>
      <div className="flex items-center ml-auto">
        <button
          className="group relative"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <AnimatePresence>
            {totalQuantity && (
              <motion.div
                key={totalQuantity}
                variants={badge}
                initial="hidden"
                animate="visible"
                exit="out"
                className="absolute -top-2 -right-3 px-2 py-[2px] rounded-xl bg-primary-orange text-xs leading-none text-white font-bold"
              >
                <motion.p variants={badgeNum}>{totalQuantity}</motion.p>
              </motion.div>
            )}
          </AnimatePresence>
          <CartSvg activeCart={isModalOpen} />
        </button>
      </div>
      <CartModal
        isModalOpen={isModalOpen}
        handleModal={setIsModalOpen.bind(null, false)}
      />
    </>
  );
};

export default CartAction;
