import React from "react";
import { Link } from "react-router-dom";
import "../../styles/postImageGroup.css";
import Seperate from "./Seperate";

const PostImageGroup = (props) => {
  return (
    <div className="postImageGroup">
      <div className="postImageGroup__info">
        <div
          className="postImageGroup__info-avatarGroup"
          style={{ backgroundImage: `url(${props.avatarGroup})` }}
        >
          <div
            className="postImageGroup__info-avatarUser"
            style={{ backgroundImage: `url(${props.avatarUser})` }}
          ></div>
        </div>
        <div className="postImageGroup__info-name">
          <div className="postImageGroup__info-groupName">
            {props.groupName}
          </div>
          <div className="postImageGroup__info-userName">
            {props.userName}
            <div className="postImageGroup__info-userInfo">
              <i className="fa-solid fa-circle" style={{ fontSize: "4px" }}></i>
              {props.time}
              <i className="fa-solid fa-earth-asia"></i>
            </div>
          </div>
        </div>
        <div className="postImageGroup__info-more">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>

      <div className="postImageGroup__content">{props.content}</div>

      <Link to="/group/">
        <img src={props.image} alt="" className="postImageGroup__image"></img>
      </Link>

      <div className="postImageGroup__reaction">
        <div className="postImageGroup__reaction-like">
          <div className="postImageGroup__reaction-likeIcon">
            <i className="fa-solid fa-thumbs-up"></i>
          </div>
          {props.reaction}
        </div>
        <div className="postImageGroup__reaction-comment">
          {props.comment} bình luận
        </div>
      </div>

      <Seperate />

      <div className="postImageGroup__button">
        <div className="postImageGroup__button-item">
          <i className="fa-regular fa-thumbs-up"></i>
          <div className="postImageGroup__button-content">Thích</div>
        </div>
        <div className="postImageGroup__button-item">
          <i className="fa-regular fa-message"></i>
          <div className="postImageGroup__button-content">Bình luận</div>
        </div>
        <div className="postImageGroup__button-item">
          <i className="fa-solid fa-share"></i>
          <div className="postImageGroup__button-content">Thích</div>
        </div>
      </div>
    </div>
  );
};

export default PostImageGroup;
