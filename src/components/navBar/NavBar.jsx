import React from "react";
import CareerButton from "./CareerButton";
import Logo from "./Logo";
import NavList from "./NavList";

const NavBar = () => {
  return (
    <div className="nav">
      <Logo />
      <NavList />
      <CareerButton />
    </div>
  );
};

export default NavBar;
