import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CartSvgAbout } from "../Svg";
import Button from "../UI/Button";
import { addItem } from "../../features/cartSlice";

const AddToCart = ({ title, discountPrice, ...rest }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const dispatch = useDispatch();

  const addToCart = () => {
    setTotalQuantity(0);
    totalQuantity && dispatch(addItem({ title, discountPrice, totalQuantity }));
  };
  return (
    <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 font-bold">
      <div className="flex items-center bg-light-grayish-blue rounded-lg">
        <Button
          styles="flex-1 p-4 group"
          onClick={() => {
            if (totalQuantity) setTotalQuantity(totalQuantity - 1);
          }}
        >
          <FaMinus className="minus__svg" />
        </Button>
        <span className="flex-1 text-center px-4">{totalQuantity}</span>
        <Button
          styles="flex-1 p-4 group"
          onClick={() => setTotalQuantity(totalQuantity + 1)}
        >
          <FaPlus className="plus__svg" />
        </Button>
      </div>

      <Button styles="action__btn" onClick={addToCart}>
        <CartSvgAbout />
        <span>Add to cart</span>
      </Button>
    </div>
  );
};

export default AddToCart;
