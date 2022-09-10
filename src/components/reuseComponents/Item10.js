import React from "react";

const Item10 = (props) => {
  return (
    <div className="item10">
      <div className="item10-imageContainer">
        <div
          className="item10-image"
          style={{
            backgroundImage: "url(" + props.image + ")",
            border: props.isLive ? "3px solid #f0284a" : "",
          }}
        ></div>
        {props.isLive ? <div className="item10-live">Live</div> : <></>}
      </div>

      <div className="item10-content">
        <div className="item10-name">{props.name}</div>
        {props.newVideos ? (
          <div className="item10-newVideo">
            <i className="fa-solid fa-circle"></i>
            <span>{props.newVideos + " video mới"}</span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Item10;
