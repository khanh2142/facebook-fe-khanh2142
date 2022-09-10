import React, { useState } from "react";

import { Container, Button, Row, Col } from "react-bootstrap";

import { Link, useLocation } from "react-router-dom";

import HeaderMenu from "./HeaderMenu";

import "../../styles/header.css";

import UserMenuManager from "./UserMenuManager";
import HeaderRoute from "../reuseComponents/HeaderRoute";
import UserRoute from "../reuseComponents/UserRoute";
import Logo from "../reuseComponents/Logo";

import "../../styles/responsive/header.css";
import HeaderMess from "./HeaderMess";
import HeaderNotify from "./HeaderNotify";

const Header = () => {
  const location = useLocation();

  return (
    <Container fluid className="d-flex align-items-center header_container">
      <Col xs={1} sm={1} md={1} lg={3}>
        <Logo />
      </Col>
      <Col md={8} xs={8} lg={6} sm={8} style={{ height: "100%" }}>
        <Container className="header_route">
          <HeaderRoute
            icon="fa-solid fa-house"
            link="/"
            active={location.pathname === "/" ? "active" : ""}
          />
          <HeaderRoute
            icon="fa-solid fa-circle-play"
            link="/watch"
            active={location.pathname === "/watch" ? "active" : ""}
          />
          <HeaderRoute
            icon="fa-solid fa-shop"
            link="/marketplace"
            active={location.pathname === "/marketplace" ? "active" : ""}
          />
          <HeaderRoute
            icon="fa-solid fa-user-group"
            link="/group"
            active={location.pathname === "/group" ? "active" : ""}
          />
          <HeaderRoute
            icon="fa-solid fa-gamepad"
            link="/gaming"
            active={location.pathname === "/gaming" ? "active" : ""}
          />
        </Container>
      </Col>
      <Col xs={1} sm={1} md={1} lg={3} style={{ minWidth: "40px" }}>
        <div className="d-flex align-items-center justify-content-end user_menu">
          <UserRoute
            avatar="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg"
            name="Jinx"
            link="/me"
          />

          <HeaderMenu />

          <HeaderMess></HeaderMess>

          <HeaderNotify />

          <UserMenuManager />
        </div>
      </Col>
    </Container>
  );
};

export default Header;
