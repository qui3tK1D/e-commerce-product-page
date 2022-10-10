import {
  product1,
  product2,
  product3,
  product4,
  thumnail1,
  thumnail2,
  thumnail3,
  thumnail4,
} from "../assets/images";

export const productDetails = {
  title: "fall limited edition sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  normalPrice: "250.00",
  discountPrice: "125.00",
  discountPercentage: "50%",
};

export const navLinks = [
  { id: 1, name: "collections" },
  { id: 2, name: "men" },
  { id: 3, name: "women" },
  { id: 4, name: "about" },
  { id: 5, name: "contact" },
];

export const products = [
  {
    id: 1,
    title: "product-1",
    thumb: thumnail1,
    img: product1,
    active: true,
  },
  {
    id: 2,
    title: "product-2",
    thumb: thumnail2,
    img: product2,
    active: false,
  },
  {
    id: 3,
    title: "product-3",
    thumb: thumnail3,
    img: product3,
    active: false,
  },
  {
    id: 4,
    title: "product-4",
    thumb: thumnail4,
    img: product4,
    active: false,
  },
];
