import React from "react";
import { Link } from "react-router-dom";

const NewsItem1 = (props) => {
  return (
    <Link
      to={props.id ? "/news/" + props.id : "#"}
      className={
        props.active ? "newsItem1__list-item active" : "newsItem1__list-item"
      }
    >
      <div
        className="newsItem1__list-avatar"
        style={{ backgroundImage: `url(${props.avatar})` }}
      ></div>
      <div className="newsItem1__list-content">
        <div className="newsItem1__list-name">{props.name}</div>
        <div className="newsItem1__list-desc">
          <div className="newsItem1__list-quanity">1 thẻ mới</div>
          <i className="fa-solid fa-circle"></i>
          <div className="newsItem1__list-time">1 phút</div>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem1;
