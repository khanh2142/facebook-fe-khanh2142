import React from "react";

const Item11 = (props) => {
  return (
    <div className="item11">
      <div className="item11-location">{props.location}</div>
      <i className="fa-solid fa-location-dot"></i>
      <div className="item11-distance">Trong vòng {props.distance} km</div>
    </div>
  );
};

export default Item11;
