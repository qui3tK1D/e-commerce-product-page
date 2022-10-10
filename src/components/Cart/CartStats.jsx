import React from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { thumnail1 } from "../../assets/images";
import Button from "../UI/Button";
import { deleteItem } from "../../features/cartSlice";

const CartStats = () => {
  const { items } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const deleteCartItem = () => {
    dispatch(deleteItem());
  };
  const emptyCart = (
    <motion.h3
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="font-bold text-dark-grayish-blue text-center mt-16 mb-20"
    >
      Your cart is empty.
    </motion.h3>
  );

  const cartItem = (
    <div className="p-6 space-y-6">
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 rounded-md overflow-hidden">
          <img src={thumnail1} className="object-cover" alt="" />
        </div>

        {/* modal cart stats */}
        <div className="text-dark-grayish-blue space-y-1">
          <h3 className="capitalize">{items.title}</h3>
          <p className="text-start">
            ${items.discountPrice} x {items.totalQuantity}
            <span className="text-very-very-blue font-bold">
              {" "}
              ${items.totalAmount}
            </span>
          </p>
        </div>

        <Button onClick={deleteCartItem}>
          <BsTrash className="text-xl text-dark-grayish-blue hover:text-very-very-blue duration-200" />
        </Button>
      </div>
      <Button styles="action__btn w-full">Checkout</Button>
    </div>
  );

  return <>{items.totalAmount ? cartItem : emptyCart}</>;
};

export default CartStats;
