import React from "react";
import bgImage from "../../img/svg/Vector.svg";
import bgImage2 from "../../img/svg/return max;.svg";
import descrImage from "../../img/svg/Group 133.svg";
import bgImage3 from "../../img/svg/bgImage3.svg";
import Ellipse from "../../img/svg/Ellipse 1.svg";
import arrowDown from "../../img/svg/Vector 7.svg";

import bgImage4 from "../../img/svg/bgImage2.svg";

import mouseIcon1 from "../../img/svg/mouse1.svg";
import mouseIcon2 from "../../img/svg/mouse2.svg";

const Main = () => {
  const bgText2 =
    "int checkPrime(int n); int main( ) { int n, i, flag = 0; printf(“Enter a positive integer: “); scanf(“%d”,";
  return (
    <div className="main">
      <div className="main__inner">
        <div className="main__content">
          <img className="main__bgImage" src={bgImage} alt="" />
          <div className="main__bg-text"></div>
          {/* <div className="main__bg-text2">{bgText2}</div> */}
          <div className="main__sphere"></div>
          {/* <img src={bgImage2} alt="" /> */}
          <h3 className="main__title">crypto trading</h3>
          <h3 className="main__subtitle">Engineers Meet</h3>
          <h3 className="main__subtitle-blue">Traders __</h3>
          <p className="main__descr">
            Advanced crypto algorithmic trading and efficient cross-chain
            execution, at scale.
          </p>
        </div>
        <div className="main__descr-image">
          <img className="main__descr-img" src={descrImage} alt="" />
        </div>
      </div>
      <a className="main__learn-more" href="#">
        <span className="main__learn-more-btn">Learn more</span>
        <div className="main__learn-more-icons">
          <img
            className="main__learn-more-ellipse"
            src={Ellipse}
            alt="ellipse"
          />
          <img className="main__learn-more-arrow" src={arrowDown} alt="arrow" />
        </div>
      </a>
      <div className="main__mouse">
        <img className="main__mouse-icon1" src={mouseIcon1} alt="" />
        <img className="main__mouse-icon2" src={mouseIcon2} alt="" />
      </div>
    </div>
  );
};

export default Main;
