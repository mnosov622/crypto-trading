import React from "react";
import NavListItem from "./NavListItem";

const NavList = () => {
  return (
    <>
      <ul className="nav__list">
        <NavListItem item="Activities" />
        <NavListItem item="Technology" />
        <NavListItem item="R&D" />
        <NavListItem item="Community" />
      </ul>
    </>
  );
};

export default NavList;
