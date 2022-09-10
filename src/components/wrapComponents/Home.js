import React, { useEffect } from "react";
import UserManager from "../mainComponents/leftComponents/UserManager";
import ContentManager from "../mainComponents/middleComponents/ContentManager";
import FriendManager from "../mainComponents/rightComponents/FriendManager";

import { Container, Row, Col } from "react-bootstrap";

import "../../styles/responsive/home.css";

const Home = () => {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);
  return (
    <Row className="home" style={{ position: "relative" }}>
      <Col
        md={3}
        sm={0}
        xs={0}
        lg={3}
        style={{ position: "fixed" }}
        className="userManager__container"
      >
        <UserManager></UserManager>
      </Col>
      <Col
        md={6}
        lg={6}
        xs={12}
        sm={12}
        style={{ position: "absolute", left: "27%" }}
        className="contentManager__container"
      >
        <ContentManager></ContentManager>
      </Col>
      <Col
        md={3}
        xs={0}
        sm={0}
        style={{ position: "fixed", right: "-25px" }}
        className="friendManager__container"
      >
        <FriendManager></FriendManager>
      </Col>
    </Row>
  );
};

export default Home;
