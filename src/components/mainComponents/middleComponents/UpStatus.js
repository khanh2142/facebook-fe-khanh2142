import React, { useEffect, useState } from "react";

import { Container, Button, Row, Col } from "react-bootstrap";

import "../../../styles/upStatus.css";

import { Link } from "react-router-dom";

import axios from "axios";

const UpStatus = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [image, setImage] = useState({});

  useEffect(() => {
    const url = "https://fb-be.herokuapp.com/user";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data[0]);
      })
      .catch((e) => console.log(e));
  }, []);

  function sendData(e) {
    e.preventDefault();
    const formData = new FormData();
    if (content) {
      formData.append("content", content);
    }
    formData.append("user_id", currentUser._id);
    formData.append("avatar", currentUser.avatar);
    formData.append("name", currentUser.name);
    if (image) {
      formData.append("image", image);
    }
    const config = { headers: { "content-type": "multipart/form-data" } };
    const url = "https://fb-be.herokuapp.com/posts/create";
    axios
      .post(url, formData, config)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="upStatus_container-box">
      <div className="upStatus_container-item">
        <Link
          to="/me"
          className="upStatus_container-avatar"
          style={{
            backgroundImage:
              "url(https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/10_2021/DTCL/Chibi%20Jinx.jpg)",
          }}
        ></Link>
        {!open ? (
          <div
            className="upStatus_container-input"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span>
              {currentUser ? currentUser.name : ""} ơi, bạn đang nghĩ gì thế?
            </span>
          </div>
        ) : (
          <div
            className="upStatus__close"
            onClick={() => {
              setOpen(!open);
              setContent("");
              setImage("");
              setImagePreview("");
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        )}
      </div>

      {open ? (
        <form
          className="upStatus__uploadContainer"
          method="post"
          encType="multipart/form-data"
        >
          <textarea
            className="upStatus__textarea"
            placeholder={
              currentUser ? currentUser.name + " ơi, bạn đang nghĩ gì thế?" : ""
            }
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="content"
          ></textarea>

          <div>
            <label htmlFor="upStatus__upload" className="label__upload">
              <i className="fa-solid fa-file-image"></i> Thêm ảnh
            </label>
            <input
              type="file"
              accept="image/*"
              id="upStatus__upload"
              name="image"
              onChange={(e) => {
                setImagePreview(URL.createObjectURL(e.target.files[0]));
                setImage(e.target.files[0]);
              }}
            ></input>
          </div>

          {imagePreview ? (
            <img src={imagePreview} style={{ height: "400px" }}></img>
          ) : (
            ""
          )}

          {content || image ? (
            <button
              type="submit"
              className="upStatus__submit active"
              onClick={(e) => sendData(e)}
            >
              Đăng
            </button>
          ) : (
            <button className="upStatus__submit" disabled>
              Đăng
            </button>
          )}
        </form>
      ) : (
        ""
      )}
      <div className="upStatus_container-function">
        <div className="upStatus_container-child">
          <i className="fa-solid fa-video"></i>
          <span>Video trực tiếp</span>
        </div>
        <div className="upStatus_container-child">
          <i className="fa-solid fa-images"></i>
          <span>Ảnh/video</span>
        </div>
        <div className="upStatus_container-child">
          <i className="fa-solid fa-face-grin-squint-tears"></i>
          <span>Cảm xúc hoạt động</span>
        </div>
      </div>
    </div>
  );
};

export default UpStatus;
