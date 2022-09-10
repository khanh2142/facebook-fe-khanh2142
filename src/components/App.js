import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./headerComponents/Header";
import UserManager from "./mainComponents/leftComponents/UserManager";
import FriendManager from "./mainComponents/rightComponents/FriendManager";

import ContentManager from "../components/mainComponents/middleComponents/ContentManager";

import { Container, Row, Col } from "react-bootstrap";

import "../styles/root.css";
import Home from "./wrapComponents/Home";
import Watch from "./wrapComponents/Watch";
import Marketplace from "./wrapComponents/Marketplace";
import Gaming from "./wrapComponents/Gaming";
import Group from "./wrapComponents/Group";
import ErrorPage from "./errorComponent/ErrorPage";
import Login from "./loginComponents/Login";
import SignUp from "./loginComponents/SignUp";
import PersonalPage from "./wrapComponents/PersonalPage";
import Friend from "./wrapComponents/Friend";
import NewsComponent from "./wrapComponents/NewsComponent";
import DetailPost from "./wrapComponents/DetailPost";

const App = () => {
  const [check, setCheck] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>

      <Header></Header>
      <Container fluid>
        <Row>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/watch" element={<Watch />}></Route>
            <Route path="/marketplace" element={<Marketplace />}></Route>
            <Route path="/gaming" element={<Gaming />}></Route>
            <Route path="/group" element={<Group />}></Route>
            <Route
              path="/me"
              element={
                <PersonalPage
                  backgroundImage="https://media.thethao.vn//uploads/2021/10/20/dtcl-gioi-thieu-linh-thu-tuong-ti-ni-tai-dau-truong-chan-ly-mua-6_45346.jpg"
                  avatar="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg"
                  name="Jinx tí nị"
                  nickname="Powder"
                  friendQuanity="200"
                  id="6262b359e271a673452a70d1"
                />
              }
            ></Route>
            <Route path="/friend/:id" element={<Friend />}></Route>
            <Route path="/news" element={<NewsComponent />}></Route>
            <Route path="/news/:id" element={<NewsComponent />}></Route>
            <Route path="/post/:id" element={<DetailPost />}></Route>
            <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
          </Routes>
        </Row>
      </Container>
    </>
  );
};

export default App;
