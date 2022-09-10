import React, { useEffect, useState } from "react";

import "../../styles/personalPage.css";

import Seperate from "../reuseComponents/Seperate";

import { Container, Col, Row } from "react-bootstrap";
import Button2 from "../reuseComponents/Button2";

import Item9 from "../reuseComponents/Item9";
import Button3 from "../reuseComponents/Button3";
import Item19 from "../reuseComponents/Item19";
import UpStatus from "../mainComponents/middleComponents/UpStatus";
import PostMenu from "../reuseComponents/PostMenu";
import PostVideo from "../reuseComponents/PostVideo";
import { useParams, Link } from "react-router-dom";
import randomNumber from "../functionComponents/randomNumber";
import PostImage from "../reuseComponents/PostImage";

import "../../styles/responsive/friend.css";

const Friend = (props) => {
  const [user, setUser] = useState({});
  const [friend, setFriend] = useState([]);
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const url = "https://fb-be.herokuapp.com/friend/" + id;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [id]);

  useEffect(() => {
    const url = "https://fb-be.herokuapp.com/friends/list";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFriend(data);
      });
  }, [id]);

  useEffect(() => {
    const url = "https://fb-be.herokuapp.com/post/userPost/" + id;
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((e) => console.log(e));
  }, [id]);

  const refreshData = () => {
    const url = "https://fb-be.herokuapp.com/post/userPost/" + id;
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((e) => console.log(e));
  };

  const { news } = user;

  const { images } = user;

  const randomFriendsQuanity = randomNumber(100, 999);

  const eventUser = [
    {
      title: "Bắt đầu công việc mới tại ĐTCL Mùa 6",
      time: "Tháng 10",
    },
    {
      title: "Bắt đầu công việc mới tại ĐTCL Mùa 6.5",
      time: "Tháng 2",
    },
  ];

  const knowList = [
    {
      content: "Jinx kẹp Vi mùa 6",
    },
    {
      content: "Lối đi riêng Jinx kẹp Vi 6.5",
    },
    {
      content: "Lõi mạnh nhất là",
    },
  ];

  return (
    <div className="personalPage__container">
      <Col
        md="10"
        className="personalPage__container-backgroundImage"
        style={{ backgroundImage: `url(${user.background})` }}
      ></Col>

      <Col md="8" className="personalPage__container-about">
        <div className="personalPage__about-avatarContainer">
          <div
            className="personalPage__about-avatar"
            style={{ backgroundImage: `url(${user.avatar})` }}
          ></div>
          <div className="personalPage__about-uploadImage">
            <i className="fa-solid fa-camera-retro"></i>
          </div>
        </div>

        <div className="personalPage__about-container">
          <div className="personalPage__about-info">
            <div className="personalPage__about-name">{user.name}</div>
            <div className="personalPage__about-nickname">
              {user.nickname ? `(${user.nickname})` : ""}
            </div>
          </div>

          <div className="personalPage__about-friendQuanity">
            {randomFriendsQuanity} Bạn bè
          </div>

          <div className="personalPage__about-friendContainer">
            <div className="personalPage__about-friendPreview">
              {friend
                ? friend.map((item, index) => {
                    if (index < 7 && item._id != id) {
                      return (
                        <Link
                          to={"/friend/" + item._id}
                          key={index}
                          className="personalPage__about-friend"
                          style={{ backgroundImage: `url(${item.avatar}) ` }}
                        ></Link>
                      );
                    }
                  })
                : ""}
              <div className="personalPage__about-allFriend">
                <i className="fa-solid fa-ellipsis"></i>
              </div>
            </div>
            <div className="personalPage__about-setting">
              <div className="personalPage__about-addNews">
                <i className="fa-solid fa-user-check"></i>
                <span>Bạn bè</span>
              </div>
              <div className="personalPage__about-edit">
                <i className="fa-brands fa-facebook-messenger"></i>
                <span>Nhắn tin</span>
              </div>
            </div>
          </div>
        </div>
      </Col>

      <Col md="8" className="personalPage__about-menu">
        <Seperate />
        <div className="personalPage__about-list">
          <div className="personalPage__about-btn">
            <Button2 content="Bài viết" active="true"></Button2>
            <Button2 content="Giới thiệu"></Button2>
            <Button2 content="Bạn bè"></Button2>
            <Button2 content="Ảnh"></Button2>
            <Button2 content="Video"></Button2>
            <Button2 content="Check in"></Button2>
            <Button2 content="Xem thêm" icon="fa-solid fa-sort-down"></Button2>
          </div>
          <div className="personalPage__about-more">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
      </Col>

      <Row className="personalPage__main-container">
        <Col md="4" className="personalPage__aboutUser">
          <div className="personalPage__aboutUser-item">
            <Item9 title="Giới thiệu"></Item9>
            <div className="personalPage__aboutUser-description">
              Hello, Mình là "<i>{user.name}</i>"
            </div>
            <Button3 content="Chỉnh sửa tiểu sử"></Button3>
            <Item19
              icon="fa-solid fa-location-dot"
              content="Đến từ Vĩnh Phúc"
            ></Item19>
            <Item19 icon="fa-solid fa-briefcase" content="IT"></Item19>
            <Button3 content="Chỉnh sửa chi tiết"></Button3>
            <Button3 content="Thêm sở thích"></Button3>
            <div className="personalPage__aboutUser-hotNews">
              {news
                ? news.map((item, index) => {
                    return (
                      <div className="personalPage__hotNews-item" key={index}>
                        <div
                          className="personalPage__hotNews-image"
                          style={{ backgroundImage: `url(${item})` }}
                        ></div>
                        <div className="personalPage__hotNews-content">
                          Tin nổi bật
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
            <Button3 content="Chỉnh sửa phần đánh chú ý"></Button3>
          </div>

          <div className="personalPage__aboutUser-item">
            <Item9 title="Ảnh" btn="Xem tất cả ảnh"></Item9>
            <div className="personalPage__image-container">
              {images
                ? images.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="personalPage__image-item"
                        style={{ backgroundImage: `url(${item})` }}
                      ></div>
                    );
                  })
                : ""}
            </div>
          </div>

          <div className="personalPage__aboutUser-item">
            <Item9 title="Bạn bè" btn="Xem tất cả bạn bè"></Item9>
            <p>{randomFriendsQuanity} người bạn</p>
            <div className="personalPage__friend-container">
              {friend
                ? friend.map((item, index) => {
                    if (item._id != id) {
                      return (
                        <Link
                          to={"/friend/" + item._id}
                          className="personalPage__friend-item"
                          key={index}
                        >
                          <div
                            className="personalPage__friend-avatar"
                            style={{
                              backgroundImage: "url(" + item.avatar + ")",
                            }}
                          ></div>
                          <div className="personalPage__friend-name">
                            {item.name}
                          </div>
                        </Link>
                      );
                    }
                  })
                : ""}
            </div>
          </div>

          <div className="personalPage__aboutUser-item">
            <Item9
              title="Sự kiện trong đời"
              btn="Xem tất cả câu trả lời"
            ></Item9>

            <div className="personalPage__event-container">
              {eventUser.map((item, index) => {
                return (
                  <div className="personalPage__event-item" key={index}>
                    <div className="personalPage__event-icon">
                      <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div className="personalPage__event-title">
                      {item.title}
                    </div>
                    <div className="personalPage__event-time">{item.time}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="personalPage__aboutUser-item">
            <Item9 title="Bạn có biết" btn="Xem tất cả câu trả lời"></Item9>
            <div className="personalPage__know-container">
              {knowList.map((item, index) => {
                return (
                  <div className="personalPage__know-item" key={index}>
                    {item.content}
                  </div>
                );
              })}
            </div>
          </div>
        </Col>
        <Col md="8" className="personalPage__content-container">
          {/* <UpStatus></UpStatus> */}
          <PostMenu title="Bài viết"></PostMenu>
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
        </Col>
      </Row>
    </div>
  );
};

export default Friend;
