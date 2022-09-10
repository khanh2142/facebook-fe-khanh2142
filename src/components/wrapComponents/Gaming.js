import React from "react";

import "../../styles/menuContainer.css";

import "../../styles/gaming.css";

import "../../styles/responsive/gaming.css";

import MenuContainer from "./menuForWrapComponents/MenuContainerForGaming";

import { Container, Row, Col } from "react-bootstrap";
import PostVideoLivestream from "../reuseComponents/PostVideoLivestream";

const Gaming = (props) => {
  const fakeData = [
    {
      avatarStreamer:
        "https://lienminh.garena.vn/images/champions/skin/41_Gangplank/0.jpg",
      name: "Gankplank",
      game: "TFT - Team Fight Tactics",
      time: "2 giờ",
      view: "1.1k",
      like: "5k",
      comment: "3k",
      avatar:
        "https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg",
    },
    {
      avatarStreamer:
        "https://i.pinimg.com/474x/4d/99/80/4d9980910c0fed8d590c6cb896f8f862.jpg",
      name: "Vayne",
      game: "TFT - Team Fight Tactics",
      time: "1 giờ",
      view: "6.1k",
      like: "10k",
      comment: "18k",
      avatar:
        "https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg",
    },
    {
      avatarStreamer:
        "https://lienminh.garena.vn/images/champions/skin/41_Gangplank/0.jpg",
      name: "Gankplank",
      game: "TFT - Team Fight Tactics",
      time: "2 giờ",
      view: "1.1k",
      like: "5k",
      comment: "3k",
      avatar:
        "https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg",
    },
    {
      avatarStreamer:
        "https://i.pinimg.com/564x/dd/00/5d/dd005dde9436eb7f92ec807bd51d7e37.jpg",
      name: "Ezreal",
      game: "TFT - Team Fight Tactics",
      time: "1 giờ",
      view: "2.1k",
      like: "7k",
      comment: "8k",
      avatar:
        "https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg",
    },
    {
      avatarStreamer:
        "https://i.pinimg.com/564x/ad/61/5a/ad615a51b5e9a383a58b8b6c4efbea82.jpg",
      name: "Irelia",
      game: "TFT - Team Fight Tactics",
      time: "2 giờ",
      view: "1.1k",
      like: "5k",
      comment: "3k",
      avatar:
        "https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg",
    },
    {
      avatarStreamer:
        "https://i.pinimg.com/564x/96/38/11/963811d9c4801f8178a7f6ee70d7df4d.jpg",
      name: "Sona",
      game: "TFT - Team Fight Tactics",
      time: "2 giờ",
      view: "1.1k",
      like: "5k",
      comment: "3k",
      avatar:
        "https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg",
    },
    {
      avatarStreamer:
        "https://i.pinimg.com/564x/fd/62/31/fd62318bd5551a3e9a5451cc1ce67c86.jpg",
      name: "Yone",
      game: "TFT - Team Fight Tactics",
      time: "2 giờ",
      view: "1.1k",
      like: "5k",
      comment: "3k",
      avatar:
        "https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg",
    },
    {
      avatarStreamer:
        "https://i.pinimg.com/564x/7f/e6/37/7fe6376fd04b2ebb9d99690fd161e776.jpg",
      name: "Kayn",
      game: "TFT - Team Fight Tactics",
      time: "2 giờ",
      view: "1.1k",
      like: "5k",
      comment: "3k",
      avatar:
        "https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg",
    },
    {
      avatarStreamer:
        "https://i.pinimg.com/564x/3f/e0/bd/3fe0bd339bf7ef6b4cbf61ca12d132ec.jpg",
      name: "Mordekaiser",
      game: "TFT - Team Fight Tactics",
      time: "2 giờ",
      view: "1.1k",
      like: "5k",
      comment: "3k",
      avatar:
        "https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg",
    },
    {
      avatarStreamer:
        "https://i.pinimg.com/564x/ec/a1/e5/eca1e5d0265b3e8dc12cb4f3e0251054.jpg",
      name: "Twisted Fate",
      game: "TFT - Team Fight Tactics",
      time: "2 giờ",
      view: "1.1k",
      like: "5k",
      comment: "3k",
      avatar:
        "https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg",
    },
    {
      avatarStreamer:
        "https://i.pinimg.com/564x/24/37/60/243760bfbdb02e31b9edca55da403021.jpg",
      name: "Teemo",
      game: "TFT - Team Fight Tactics",
      time: "2 giờ",
      view: "1.1k",
      like: "5k",
      comment: "3k",
      avatar:
        "https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg",
    },
    {
      avatarStreamer:
        "https://i.pinimg.com/564x/04/3d/b5/043db55a1ab0c70a0e2572d7c4ef8c32.jpg",
      name: "Solraka",
      game: "TFT - Team Fight Tactics",
      time: "2 giờ",
      view: "1.1k",
      like: "5k",
      comment: "3k",
      avatar:
        "https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg",
    },
  ];

  return (
    <>
      <Col
        className="gaming__col"
        md="0"
        xs={0}
        sm={0}
        lg={3}
        style={{ padding: "0", position: "fixed" }}
      >
        <MenuContainer content="Gaming"></MenuContainer>
      </Col>
      <Col md="12" xs={12} sm={12} lg={9} className="gamingContainer">
        {fakeData.map((item, index) => {
          return (
            <PostVideoLivestream
              key={index}
              avatarStreamer={item.avatarStreamer}
              name={item.name}
              game={item.game}
              time={item.time}
              viewCount={item.view}
              people={item.like}
              countComment={item.comment}
              avatar={item.avatar}
            ></PostVideoLivestream>
          );
        })}
      </Col>
    </>
  );
};

export default Gaming;
