import React, { useState } from "react";
import ProductAbout from "./ProductAbout";
import ProductImages from "../ProductImages/ProductImages";
import LightBox from "../LightBox/LightBox";

const SneakerInfo = () => {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  return (
    <div className="sm:max-w-xl md:max-w-4xl mx-auto flex flex-col md:items-center pb-12 mt-20 space-y-6 md:space-y-0 md:flex-row md:py-20 md:mt-20">
      <ProductImages openLightBox={setIsLightBoxOpen.bind(null, true)} />

      <ProductAbout />

      <LightBox
        isLightBoxOpen={isLightBoxOpen}
        closeLightBox={setIsLightBoxOpen.bind(null, false)}
      />
    </div>
  );
};

export default SneakerInfo;
