import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link className="logo-image" to="/">
        <img src="../images/logo40.png"></img>
      </Link>

      <div className="search">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          className="search-box"
          placeholder="Tìm kiếm trên Facebook"
        ></input>
      </div>
    </div>
  );
};

export default Logo;
