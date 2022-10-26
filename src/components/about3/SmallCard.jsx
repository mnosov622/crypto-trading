import React from "react";

const SmallCard = ({ title, subtitle, medium }) => {
  return (
    <div className="cards__card cards__card-sm">
      <div className="cards__card-content1">
        <p className="cards__card-title">{title}</p>
        <p className="cards__card-subtitle1">
          {subtitle}
          <span className="medium">{medium}</span>
        </p>
        <a className="cards__card-more" href="#">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default SmallCard;
