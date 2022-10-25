import React from "react";

const NavListItem = ({ item }) => {
  return (
    <a href="#" className="nav__list-link">
      <li className="nav__list-item">{item}</li>
    </a>
  );
};

export default NavListItem;
