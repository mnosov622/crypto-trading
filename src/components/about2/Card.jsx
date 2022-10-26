import React from "react";

const Card = ({ name, line4, line1 }) => {
  return (
    <div
      className={[
        "platform__card",
        line4 ? "platform__cards--line4" : "",
        line1 ? "platform__card--line1" : "",
      ].join(" ")}
    >
      {name}
    </div>
  );
};

export default Card;
