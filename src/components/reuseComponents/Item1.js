import React from "react";

const Item1 = (props) => {
  return (
    <div className="item1">
      <div className="item1-icon">
        <i className={props.icon}></i>
      </div>
      <div className="item1-content">
        <span className="item1_content-title">{props.title}</span>
        <span className="item1_content-desc">{props.content}</span>
      </div>
    </div>
  );
};

export default Item1;
