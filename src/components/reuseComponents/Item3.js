import React from "react";

const Item3 = (props) => {
  return (
    <div className={props.active ? "item3 active" : "item3"}>
      <div className="item3-icon">
        <i className={props.icon}></i>
      </div>
      <div className="item3-content">{props.content}</div>
      {props.rightBtn ? (
        <i className="fa-solid fa-chevron-right rightOpen"></i>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Item3;
