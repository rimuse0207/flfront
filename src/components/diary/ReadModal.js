import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import Comment from "./Comment";
import * as config from "../../conf";
import { connect } from "react-redux";
import {
  postComment,
  getComment,
  initialForm,
} from "../../models/diary/comment";
import Slider from "react-slick";

Modal.setAppElement("#rootModal");

const customStyles = {
  content: {
    width: "30%",
    padding: "0",
    height: "80%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ReadModal = ({
  show,
  cancel,
  data,
  login,
  postComment,
  getComment,
  commentData,
  initialForm,
}) => {
  function closeModal() {
    initialForm();
    cancel();
  }

  const [comment, setComment] = useState("");
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(login.useredName, comment, data._id);
    setComment("");
    initialForm();
    getComment(data._id);
  };

  const images = data.imageFile.map((list) => {
    return (
      <div className="ModalImg">
        <img
          key={list}
          height="100%"
          src={`${config.SERVER_ADDRESS}/img/${list}`}
        ></img>
      </div>
    );
  });

  const comment123 = commentData ? (
    <Comment data={commentData.data}></Comment>
  ) : (
    <></>
  );

  useEffect(() => {
    initialForm();

    getComment(data._id);
    return () => {
      getComment(data._id);
    };
  }, [postComment]);

  const LoginCheck = login.useredName ? (
    <form className="CommentForm" onSubmit={handleSubmit}>
      <input
        name="comment"
        value={comment}
        placeholder="Enter comment..."
        onChange={handleChange}
      ></input>
      <button type="submit">입력</button>
    </form>
  ) : (
    <></>
  );

  return (
    <>
      <Modal isOpen={show} onRequestClose={closeModal} style={customStyles}>
        <div className="BoxDiv2">{images}</div>
        <div className="BoxDiv3">
          <h1 className="FlowerNameh1">{data.flowerName}</h1>
          <h2>{data.title}</h2>

          <div className="CommentBox">
            <div>
              <div style={{}}>
                <span>{data.useredName}</span>

                <span style={{ fontSize: "0.5rem", color: "gray" }}>
                  {data.date.substr(0, 10)}
                  {"  "}
                  {data.date.substr(11, 6)}
                </span>
              </div>
              <div className="CommentMessage">{data.descreption}</div>
              {comment123}
            </div>
          </div>
          {LoginCheck}
        </div>
      </Modal>
    </>
  );
};
export default connect(
  (state) => ({
    login: state.login.login,
    commentData: state.comment.commentData,
  }),
  {
    postComment,
    getComment,
    initialForm,
  }
)(ReadModal);
