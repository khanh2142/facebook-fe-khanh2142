import React from "react";

const Button1 = (props) => {
  return (
    <div className="button1">
      <i className="fa-solid fa-plus"></i>
      <div style={{ marginLeft: "10px", fontSize: "14px", fontWeight: "600" }}>
        {props.content}
      </div>
    </div>
  );
};

export default Button1;
