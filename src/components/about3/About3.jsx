import React from "react";
import card1Bg from "../../img/svg/Group 6.svg";
import SmallCard from "./SmallCard";
import card4Bg from "../../img/svg/Pattern.svg";

const About3 = () => {
  return (
    <div className="cards">
      <div className="cards__inner">
        <div className="cards__row">
          <div className="cards__card cards__card--big">
            <img className="cards__card-img" src={card1Bg} alt="" />
            <div className="cards__card-content">
              <p className="cards__card-title">Spot & Margin</p>
              <p className="cards__card-subtitle">
                Trade <span className="gradient">200+</span> pairs with up to
                10x leverage
              </p>
              <a className="cards__card-more" href="#">
                Learn more
              </a>
            </div>
          </div>

          <div className="cards__column">
            <div className="cards__row">
              <SmallCard
                title="DERIVATIVES"
                subtitle="40+ quarterly futures and contracts"
              />
              <SmallCard
                title="Trading Arena"
                subtitle="Prize pools worth up to"
                medium="USD 1,000,000"
              />
            </div>
            <div className="cards__card cards__card--md">
              <img className="cards__card-bg4" src={card4Bg} alt="" />
              <div className="cards__card-content4">
                <p className="cards__card-title4">mobile app</p>
                <p className="cards__card-subtitle4">Trade anytime, anywhere</p>
                <a className="cards__card-more" href="#">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;
