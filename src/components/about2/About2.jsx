import React from "react";
import Card from "./Card";

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
          <div className="platform__cards platform__cards--centered">
            <Card name="Public Data" />
            <Card name="Encrypted Private Data *" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
