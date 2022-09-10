import React, { useState, useEffect } from "react";

import { Container, Button, Row, Col } from "react-bootstrap";

import "../../../styles/userManager.css";

import Item5 from "../../reuseComponents/Item5";

import Item6 from "../../reuseComponents/Item6";

import axios from "axios";
import Seperate from "../../reuseComponents/Seperate";
import AvatarItem2 from "../../reuseComponents/AvatarItem2";

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) => <li>{number}</li>);

const UserManager = () => {
  const [data, setData] = useState([]);
  const [dataBtn, setDataBtn] = useState([]);
  const [isDefault, setIsDefault] = useState(true);
  const [friends, setFriends] = useState([]);
  const [btnMore, setBtnMore] = useState({
    icon: "fa-solid fa-circle-chevron-down",
    content: "Xem thêm",
  });

  useEffect(() => {
    const url = "https://fb-be.herokuapp.com/api";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        const dummyArray = [];
        data.forEach((item, index) => {
          if (index <= 5) {
            dummyArray.push(item);
          }
        });
        setDataBtn(dummyArray);
      });
  }, []);

  useEffect(() => {
    const url = "https://fb-be.herokuapp.com/friends/list";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
      });
  }, []);

  function loadmore() {
    setIsDefault(!isDefault);
    if (isDefault) {
      setDataBtn(data);
      setBtnMore({
        icon: "fa-solid fa-circle-chevron-up",
        content: "Ẩn bớt",
      });
    } else {
      const dummyArray = [];
      data.forEach((item, index) => {
        if (index <= 5) {
          dummyArray.push(item);
        }
      });
      setDataBtn(dummyArray);
      setBtnMore({
        icon: "fa-solid fa-circle-chevron-down",
        content: "Xem thêm",
      });
    }
  }

  return (
    <Container fluid className="um_container">
      <div className="um_scroll">
        <AvatarItem2
          avatar="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg"
          fullname="Jinx tý nị"
        />
        <div className="um_function">
          {dataBtn.map((item, index) => {
            return (
              <Item5
                icon={item.icon}
                content={item.content}
                link={item.link}
                key={index}
              />
            );
          })}
        </div>

        <div className="um_function-item" onClick={() => loadmore()}>
          <i className={btnMore.icon}></i>
          <span>{btnMore.content}</span>
        </div>

        <Seperate />

        <div className="um_group">
          {friends.map((item, index) => {
            return (
              <Item6
                image={item.avatar}
                content={item.name}
                key={index}
                id={item._id}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default UserManager;
