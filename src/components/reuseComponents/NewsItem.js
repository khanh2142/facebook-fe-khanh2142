import React from "react";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
  return (
    <Link
      to={"/news/" + props.id}
      className="newsItem"
      style={{
        backgroundImage: `url(${props.news})`,
      }}
    >
      <div
        className="newsItem-container"
        style={{ backgroundColor: "#0084ff" }}
      >
        <div
          className="newsItem-avatar"
          style={{
            backgroundImage: `url(${props.avatar})`,
          }}
        ></div>
      </div>

      <div className="newsItem-name">{props.username}</div>
    </Link>
  );
};

export default NewsItem;
