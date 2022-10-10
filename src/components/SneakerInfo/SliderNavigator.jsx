import React from "react";
import SliderBtn from "../UI/SliderBtn";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { handleSlide } from "../../features/tabImgSlice";

const SliderNavigator = ({ type }) => {
  const dispatch = useDispatch();
  return (
    <>
      <SliderBtn
        variants={
          type === "mobile" ? "md:hidden translate-x-1/2" : "-translate-x-1/2"
        }
        onClick={(e) => {
          dispatch(handleSlide("left"));
        }}
      >
        <FiChevronLeft className="slider__svg" />
      </SliderBtn>
      <SliderBtn
        variants={`right-0 ${
          type === "mobile" ? "md:hidden -translate-x-1/2" : "translate-x-1/2"
        }`}
        onClick={() => {
          dispatch(handleSlide("right"));
        }}
      >
        <FiChevronRight className="slider__svg" />
      </SliderBtn>
    </>
  );
};

export default SliderNavigator;
