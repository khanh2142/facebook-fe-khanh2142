import React, { useEffect, useState } from "react";

import { Container, Button, Row, Col } from "react-bootstrap";

import "../../../styles/news.css";

import NewsItem from "../../reuseComponents/NewsItem";
import AddNewsItem from "../../reuseComponents/AddNewsItem";
import LoadMoreNewsItem from "../../reuseComponents/LoadMoreNewsItem";

const News = () => {
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    const url = "https://fb-be.herokuapp.com/friends/list";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFriend(data);
      });
  }, []);

  return (
    <div style={{ position: "relative" }} className="news__container-list">
      <AddNewsItem avatar="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg" />
      {friend
        ? friend.map((item, index) => {
            if (index < 4) {
              return (
                <div className="news_container" key={index}>
                  <NewsItem
                    news={item.news[0]}
                    avatar={item.avatar}
                    username={item.name}
                    id={item._id}
                  />
                </div>
              );
            }
          })
        : ""}
      <LoadMoreNewsItem />
    </div>
  );
};

export default News;
