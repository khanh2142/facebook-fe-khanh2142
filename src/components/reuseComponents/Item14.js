import React from "react";

const Item14 = (props) => {
  return (
    <div className="item14">
      <div
        className="item14-image"
        style={{ backgroundImage: "url(" + props.image + ")" }}
      ></div>
      <div className="item14-content">
        <div className="item14-title">{props.title}</div>
        <div className="item14-desc">
          <i className="fa-solid fa-circle"></i>
          <div className="item14-time">{props.time}</div>
        </div>
      </div>
    </div>
  );
};

export default Item14;
