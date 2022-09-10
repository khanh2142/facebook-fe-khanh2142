import React from "react";
import { Link } from "react-router-dom";

const FriendItem = (props) => {
  return (
    <div className="friend_container-item">
      <Link className="friend__container-detail" to={"/friend/" + props.id}>
        <div
          className="friend__detail-avatar"
          style={{ backgroundImage: `url(${props.avatar})` }}
        ></div>
        <div className="friend__detail-name">{props.fullname}</div>
      </Link>

      <div
        className="friend_container-avatar"
        style={{
          backgroundImage: `url(${props.avatar})`,
        }}
      >
        {props.status == "online" ? (
          <div
            className="friend_container-status"
            style={{ backgroundColor: "#31a24c" }}
          ></div>
        ) : (
          <div
            className="friend_container-status"
            style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
          ></div>
        )}
      </div>
      <span className="friend_container-name">{props.fullname}</span>
    </div>
  );
};

export default FriendItem;
