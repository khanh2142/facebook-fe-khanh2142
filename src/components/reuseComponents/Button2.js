import React from "react";

const Button2 = (props) => {
  return (
    <div className={props.active ? "button2 active" : "button2"}>
      <div className="button2-content">{props.content}</div>
      {props.icon ? <i className={props.icon + " button2-icon"}></i> : <></>}
    </div>
  );
};

export default Button2;
