import React from "react";
import Card from "./Card";
import CardImage from "../../img/svg/Vector5.svg";
import Shadow5 from "../../img/svg/Shadow5.svg";
import Line8 from "../../img/svg/Line 8.svg";
import Line9 from "../../img/svg/Line 9.svg";

const About2 = () => {
  return (
    <div className="platform">
      <div className="platform__inner">
        <div className="platform__rectangles">
          <div className="platform__rectangle">
            <div className="platform__cards">
              <Card name="Artificial Intelligence" />
              <Card name="Storage Networks" />
              <Card name="P2P Networks" />
            </div>
          </div>
          {/* <div className="platform__cards platform__cards--centered">
            <Card name="Public Data" line1 />
            <Card name="Encrypted Private Data *" />
          </div> */}

          <div className="platform__recntagle">
            <div className="platform__cards"></div>
            <div className="platform__card--column2">Public Data</div>
            <div className="platform__card--column2 platform__card--column2-card2">
              Encrypted Private Data *
            </div>
          </div>
          <div className="platform__rectangle--big">
            <div className="platform__rectangle-content">
              <img className="platform__rectangle-img" src={CardImage} alt="" />
              <p className="platform__rectangle-text">
                Easy to use digital service and exclusive personal service for
                our active traders
              </p>
              <div className="platform__card-column3">Indexing</div>
              <div className="platform__card-column3">API</div>
            </div>
            <img className="line8" src={Line8} alt="" />
            <img className="line9" src={Line9} alt="" />
            <div className="platform__text">Consumers</div>
          </div>
        </div>
        <div className="platform__content">
          <div className="platform__content-title">
            The future <span className="gray"> of</span> Cryptocurrency trading
            <span className="gradient"> platform</span>
          </div>
          <div className="platform__content-subtitle">
            Take advantage of time and sales, futures spread orders and depth
            trader — plus, trade directly from charts.
          </div>
          <a className="platform__content-more" href="#">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default About2;
