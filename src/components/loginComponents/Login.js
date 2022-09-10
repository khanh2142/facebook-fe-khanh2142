import React from "react";
import { Link } from "react-router-dom";

import "../../styles/login.css";
import Seperate from "../reuseComponents/Seperate";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="logoContainer">
        <h1>facebook</h1>
      </div>
      <div className="loginForm">
        <input
          className="loginForm-input"
          type="text"
          name="username"
          placeholder="Tên đăng nhập"
          autoComplete="off"
        ></input>
        <input
          className="loginForm-input"
          type="password"
          name="password"
          placeholder="Mật khẩu"
        ></input>
        <button className="loginForm-submit">Đăng nhập</button>
        <Link to="/resetpass" className="loginForm-reset">
          Quên mật khẩu
        </Link>
        <Seperate />
        <Link to="/signup" className="loginForm-signup">
          Đăng ký
        </Link>
      </div>
    </div>
  );
};

export default Login;
