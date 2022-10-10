import React, { useState } from "react";
import { logo, avatar } from "../../assets/images";
import { MenuSvg } from "../Svg";
import CartAction from "../Cart/CartAction";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const menuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="max-w-5xl mx-auto px-6 md:px-0 py-6 md:border-b md:border-b-grayish-blue flex items-center relative md:shadow-inner">
        <button className="group block md:hidden" onClick={menuOpen}>
          <MenuSvg />
        </button>

        <img
          src={logo}
          alt="sneakers"
          className="cursor-pointer ml-4 mr-8 lg:mr-16 md:ml-0"
        />

        <NavLinks
          styleContainer="navlinks__container-desktop"
          styleLink="navlink"
        />

        <CartAction />

        <div className="avatar__container">
          <img src={avatar} alt="user-avatar" className="object-contain" />
        </div>
      </nav>
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} menuClose={menuClose} />
    </>
  );
};

export default NavBar;
