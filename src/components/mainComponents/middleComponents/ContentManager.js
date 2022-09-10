import React, { useEffect, useState } from "react";

import News from "../newsComponents/News";

import UpStatus from "../middleComponents/UpStatus";

import "../../../styles/contentManager.css";
import PostImage from "../../reuseComponents/PostImage";

const ContentManager = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://fb-be.herokuapp.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  const refreshData = () => {
    const url = "https://fb-be.herokuapp.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  };

  return (
    <div className="contentManager">
      <News></News>
      <UpStatus></UpStatus>
      {data
        ? data.map((item, index) => {
            return (
              <PostImage
                key={index}
                avatar={item.avatar}
                name={item.name}
                time={item.createAt}
                image={item.image}
                content={item.content}
                comment={item.comment.length}
                id={item.user_id}
                post_id={item._id}
                refresh={refreshData}
              ></PostImage>
            );
          })
        : ""}
    </div>
  );
};

export default ContentManager;
