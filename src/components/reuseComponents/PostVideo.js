import React from "react";

import "../../styles/postVideo.css";
import Seperate from "../reuseComponents/Seperate";

const PostVideo = (props) => {
  return (
    <div className="postVideo">
      <div className="postVideo__user">
        <div
          className="postVideo__user-avatar"
          style={{ backgroundImage: "url(" + props.avatar + ")" }}
        ></div>

        <div className="postVideo__user-info">
          <div className="postVideo__user-name">
            <div className="postVideo__user-username">{props.name}</div>
            <span>đã đăng video</span>
          </div>
          <div className="postVideo__user-time">
            {props.time} <i className="fa-solid fa-earth-asia"></i>
          </div>
        </div>

        <div className="postVideo__user-more">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>

      <div className="postVideo__content">{props.content}</div>

      <div className="postVideo__video">
        <div className="postVideo__video-function">
          <i className="fa-solid fa-play postVideo__video-play"></i>
          <div className="postVideo__video-duration">0:00 / 0:00</div>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="0"
            id="postVideo__video-progress"
            className="postVideo__video-progress"
          />
          <i className="fa-solid fa-gear postVideo__video-setting"></i>
          <i className="fa-solid fa-closed-captioning postVideo__video-sub"></i>
          <i className="fa-solid fa-down-left-and-up-right-to-center postVideo__video-resize"></i>
          <i className="fa-solid fa-up-right-from-square postVideo__video-minimize"></i>
        </div>

        <i className="fa-solid fa-volume-high postVideo__video-volume"></i>

        <input
          type="range"
          min="0"
          max="100"
          defaultValue="100"
          className="postVideo__video-audioProgress"
        />
      </div>

      <div className="postVideo__about">
        <div className="postVideo__reaction">
          <div className="postVideo__react"></div>
          <div className="postVideo__people">{props.people}</div>
        </div>
        <div className="postVideo__comment">
          {props.countComment ? props.countComment + " lượt bình luận" : ""}
        </div>
      </div>

      <Seperate></Seperate>

      <div className="postVideo__button">
        <div className="postVideo__button-item">
          <i className="fa-regular fa-thumbs-up"></i>
          <div className="postVideo__button-content">Thích</div>
        </div>
        <div className="postVideo__button-item">
          <i className="fa-regular fa-message"></i>
          <div className="postVideo__button-content">Bình luận</div>
        </div>
        <div className="postVideo__button-item">
          <i className="fa-solid fa-share"></i>
          <div className="postVideo__button-content">Chia sẻ</div>
        </div>
      </div>

      <Seperate></Seperate>

      <div className="postVideo__typeComment">
        <div className="postVideo__typeComment-content">Phù hợp nhất</div>
        <i className="fa-solid fa-caret-down"></i>
      </div>

      <div className="postVideo__comment-container">
        <div
          className="postVideo__comment-avatar"
          style={{ backgroundImage: "url(" + props.avatar + ")" }}
        ></div>

        <div className="postVideo__comment-function">
          <input
            className="postVideo__comment-input"
            placeholder="Viết bình luận..."
          ></input>
          <div className="postVideo__comment-button">
            <i className="fa-solid fa-user-graduate"></i>
          </div>
          <div className="postVideo__comment-button">
            <i className="fa-solid fa-face-grin-squint"></i>
          </div>
          <div className="postVideo__comment-button">
            <i className="fa-solid fa-camera"></i>
          </div>
          <div className="postVideo__comment-button">
            <i className="fa-solid fa-image"></i>
          </div>
        </div>
      </div>

      <div className="postVideo__more">
        {props.countComment
          ? "Xem thêm " + props.countComment + " bình luận"
          : ""}
      </div>
    </div>
  );
};

export default PostVideo;
