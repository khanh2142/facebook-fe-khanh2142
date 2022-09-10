import React, { useEffect, useState } from "react";

import { Container, Button, Row, Col } from "react-bootstrap";

import "../../../styles/friendManager.css";

import AdItem from "../../reuseComponents/AdItem";
import Seperate from "../../reuseComponents/Seperate";
import FriendItem from "../../reuseComponents/FriendItem";
import CircleButton from "../../reuseComponents/CircleButton";
import random from "../../functionComponents/random";

const Friend = () => {
  const [friendList, setFriendList] = useState([]);
  const isOnline = ["online", ""];

  useEffect(() => {
    const url = "https://fb-be.herokuapp.com/friends/list";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFriendList(data);
      });
  }, []);

  return (
    <div className="friend_container">
      <div className="friend_title-menu">
        <span className="friend_title-content">Người liên hệ</span>
        <div className="friend_title-manage">
          <CircleButton
            icon="fa-solid fa-video"
            width="30px"
            height="30px"
            iconSize="13px"
          />

          <CircleButton
            icon="fa-solid fa-magnifying-glass"
            width="30px"
            height="30px"
            iconSize="13px"
          />

          <CircleButton
            icon="fa-solid fa-ellipsis"
            width="30px"
            height="30px"
            iconSize="13px"
          />
        </div>
      </div>

      <div className="friend_container-menu">
        {friendList.map((item, index) => {
          return (
            <FriendItem
              key={index}
              avatar={item.avatar}
              fullname={item.name}
              status={random(isOnline)}
              id={item._id}
            />
          );
        })}
      </div>
    </div>
  );
};

const FriendManager = () => {
  return (
    <Container
      className="friend_scroll"
      style={{ padding: "10px", overflowX: "visible !important" }}
    >
      <AdItem
        image="https://cdn.tgdd.vn//GameApp/1318339//Yone-800x450.jpg"
        content="Yone quá mạnh !"
        link="dtcl.gg"
      />
      <AdItem
        image="https://cdn.tgdd.vn//GameApp/1344459//lux-800x450.jpg"
        content="Lux cùng những người bạn !"
        link="dtcl.gg"
      />
      <Seperate />
      <Friend></Friend>
    </Container>
  );
};

export default FriendManager;
