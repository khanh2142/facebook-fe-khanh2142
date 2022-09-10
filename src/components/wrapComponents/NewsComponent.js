import React, { useEffect, useState } from "react";

import "../../styles/newsComponent.css";

import { Container, Row, Col } from "react-bootstrap";
import NewsItem1 from "../reuseComponents/NewsItem1";
import { useParams } from "react-router-dom";
import NewsItem2 from "../reuseComponents/NewsItem2";
import NewsItem3 from "../reuseComponents/NewsItem3";

import "../../styles/responsive/news.css";

const NewsComponent = () => {
  const [friend, setFriend] = useState([]);
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const url = "https://fb-be.herokuapp.com/friends/list";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFriend(data);
      })
      .catch((e) => console.log(e));
    const userUrl = "https://fb-be.herokuapp.com/user";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUser(data[0]);
      });
  }, []);

  useEffect(() => {
    const url = "https://fb-be.herokuapp.com/friend/" + id;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
      });
  }, [id]);

  return (
    <div className="newsComponent__row">
      <Col md={2} lg={3} className="newsComponent__list">
        <div className="newsComponent__list-bigTitle">Tin</div>
        <div className="newsComponent__list-title">Tất cả tin</div>
        {friend
          ? friend.map((item, index) => {
              if (item._id === id) {
                return (
                  <NewsItem1
                    key={index}
                    avatar={item.avatar}
                    id={item._id}
                    name={item.name}
                    active="true"
                  ></NewsItem1>
                );
              } else {
                return (
                  <NewsItem1
                    key={index}
                    avatar={item.avatar}
                    id={item._id}
                    name={item.name}
                  ></NewsItem1>
                );
              }
            })
          : ""}
      </Col>
      <Col md={10} lg={9} className="newsComponent__preview">
        <NewsItem2
          avatar={id ? currentUser.avatar : ""}
          name={id ? currentUser.name : ""}
          news={id ? (currentUser.news ? currentUser.news[0] : "") : ""}
        ></NewsItem2>
        <NewsItem3></NewsItem3>
      </Col>
    </div>
  );
};

export default NewsComponent;
