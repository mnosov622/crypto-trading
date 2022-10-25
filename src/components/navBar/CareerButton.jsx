import React from "react";
import arrowIcon from "../../img/svg/arrow-left-up 1.svg";

const CareerButton = () => {
  return (
    <a className="nav__career-link" href="#">
      <div className="nav__career">
        <button className="nav__career-btn">Career</button>
        <img className="nav__arrow" src={arrowIcon} alt="arrow" />
      </div>
    </a>
  );
};

export default CareerButton;
