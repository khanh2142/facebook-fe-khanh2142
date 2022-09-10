import React from "react";
import { Link } from "react-router-dom";

const NewsItem2 = (props) => {
  return (
    <div
      className="newsItem2__preview-item"
      style={{ backgroundImage: `url(${props.news})` }}
    >
      <div className="newsItem2__preview-user">
        <Link
          to={"/friend/" + props.id}
          className="newsItem2__preview-avatar"
          style={{ backgroundImage: `url(${props.avatar})` }}
        ></Link>
        <div className="newsItem2__preview-info">
          <div className="newsItem2__preview-name">{props.name}</div>
          <div className="newsItem2__preview-time">1 phút</div>
        </div>
        <div className="newsItem2__preview-btn">
          <div className="newsItem2__preview-button">
            <i className="fa-solid fa-play"></i>
          </div>
          <div className="newsItem2__preview-button">
            <i className="fa-solid fa-volume-high"></i>
          </div>
          <div className="newsItem2__preview-button">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem2;
