import React from "react";

const Item12 = (props) => {
  return (
    <div className="item12">
      <div
        className="item12-image"
        style={{ backgroundImage: "url(" + props.image + ")" }}
      ></div>
      <div className="item12-content">
        <div className="item12-groupName">{props.groupName}</div>
        <div className="item12-timeActivity">
          Lần hoạt động gần nhất : {props.time} trước
        </div>
      </div>
    </div>
  );
};

export default Item12;
