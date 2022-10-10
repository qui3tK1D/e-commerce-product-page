import React from "react";
import AddToCart from "./AddToCart";
import { productDetails } from "../../constants";

const ProductAbout = () => {
  return (
    <div className="px-6 md:pl-6 lg:pl-20 md:px-0">
      <span className="uppercase text-primary-orange tracking-widest text-sm font-bold">
        sneaker company
      </span>
      <h1 className="capitalize text-4xl text-very-very-blue font-bold my-3 mb-4 md:mb-7">
        {productDetails.title}
      </h1>
      <p className="text-dark-grayish-blue">{productDetails.description}</p>
      <div className="my-6 flex flex-row justify-between items-center md:items-start md:flex-col font-bold space-y-0 md:space-y-1">
        <div className="space-x-4 flex items-center">
          <span className="text-2xl text-very-very-blue">
            ${productDetails.discountPrice}
          </span>
          <span className="p-2 py-0 rounded-md bg-pale-orange text-primary-orange">
            {productDetails.discountPercentage}
          </span>
        </div>
        <span className="line-through text-grayish-blue text-md">
          ${productDetails.normalPrice}
        </span>
      </div>
      <AddToCart {...productDetails} />
    </div>
  );
};

export default React.memo(ProductAbout);
