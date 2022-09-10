import React from "react";

const Item20 = (props) => {
  return (
    <div className="item20">
      <i className={props.icon}></i>
      <div className="item20-content">{props.content}</div>
    </div>
  );
};

export default Item20;
