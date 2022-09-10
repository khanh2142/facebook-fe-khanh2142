import React from "react";

const Item2 = (props) => {
  return (
    <div className="item2">
      <div className="item2-icon">
        <i className={props.icon}></i>
      </div>
      <div className="item2-content">{props.content}</div>
    </div>
  );
};

export default Item2;
