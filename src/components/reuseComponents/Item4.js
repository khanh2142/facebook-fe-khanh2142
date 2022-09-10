import React from "react";

const Item4 = (props) => {
  return (
    <div className="item4">
      <div className="item4-icon">
        <i className={props.icon}></i>
      </div>
      <div className="item4-content">
        <p>{props.p}</p>
        <span>{props.span}</span>
      </div>
    </div>
  );
};

export default Item4;
