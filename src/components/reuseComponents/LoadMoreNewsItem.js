import React from "react";
import { Link } from "react-router-dom";

const LoadMoreNewsItem = () => {
  return (
    <Link className="newsItem-all" to={"/news"}>
      <i className="fa-solid fa-arrow-right"></i>
    </Link>
  );
};

export default LoadMoreNewsItem;
