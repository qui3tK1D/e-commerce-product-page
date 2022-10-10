import React from "react";
import { motion } from "framer-motion";
import SliderNavigator from "../SneakerInfo/SliderNavigator";
import { useDispatch, useSelector } from "react-redux";
import { handleThumbnail } from "../../features/tabImgSlice";

const productImg = {
  hidden: { scale: 0.95 },
  visible: {
    scale: 1,
    transition: { type: "spring", bounce: 0.12, damping: 18 },
  },
};

const ProductImages = ({ isLightBoxOpen, openLightBox }) => {
  const products = useSelector((store) => store.tabImg.products);
  const dispatch = useDispatch();

  return (
    <div className="space-y-6">
      <div className="md:rounded-xl relative">
        {products.map((cur) => (
          <motion.img
            initial="hidden"
            variants={productImg}
            animate={cur.active ? "visible" : ""}
            key={cur.id}
            src={cur.img}
            alt={cur.title}
            className={`product__img ${
              cur.active ? "product__img-active" : ""
            }`}
            onClick={openLightBox}
          />
        ))}

        {!isLightBoxOpen && <SliderNavigator type="mobile" />}
        {isLightBoxOpen && <SliderNavigator type="lightbox" />}
      </div>
      <div className="hidden md:flex space-x-6">
        {products.map((cur) => (
          <div
            key={cur.id}
            className={`thumbnail__container ${
              cur.active ? "thumbnail__container-active" : ""
            }`}
            onClick={() => {
              dispatch(handleThumbnail(cur.id));
            }}
          >
            <img
              src={cur.thumb}
              alt={cur.title}
              className="product__thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
