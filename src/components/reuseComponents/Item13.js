import React from "react";

const Item13 = (props) => {
  return (
    <div className="item13">
      <div
        className="item13-image"
        style={{
          backgroundImage: "url(" + props.image + ")",
          border: props.isLive ? "4px solid #f0284a" : "",
        }}
      ></div>
      <div className="item13-content">
        <div className="item13-name">{props.name}</div>
        <div className="item13-game">{props.game}</div>
      </div>
      {props.isLive ? (
        <div className="item13-live">
          <i className="fa-solid fa-eye"></i>
          <div className="item13-view">{props.views}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Item13;
