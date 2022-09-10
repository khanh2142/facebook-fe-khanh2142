import React from "react";

import "../../styles/errorPage.css";

import { Container } from "react-bootstrap";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorContainer">
      <div className="errorBox">
        <i className="fa-solid fa-screwdriver-wrench"></i>
        <h3>Trang đang trong quá trình sửa chữa !</h3>
      </div>
      <Link to="/" className="errorHome">
        Trang chủ
      </Link>
    </div>
  );
};

export default ErrorPage;
