import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Css/compnentesCss/Navi.css";
import { connect } from "react-redux";
import { initialForm } from "../models/user/login";

function Navi({ login, loginSuccess, initialForm }) {
  const handleLogOut = () => {
    localStorage.setItem("useredName", false);
    localStorage.setItem("loginee", false);
    initialForm();
  };

  const Success = loginSuccess ? (
    <>
      <div>{login.useredName}님 </div>
      <button onClick={handleLogOut}>logout</button>
    </>
  ) : (
    <>
      <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
        <span role="img" aria-label="login">
          ✈️
        </span>
        ーlogin
      </Link>
      <Link to="/signUp" style={{ textDecoration: "none", color: "black" }}>
        <span role="img" aria-label="logout">
          🛩
        </span>
        ーSign Up
      </Link>
    </>
  );
  return (
    <div className="Nav">
      <header className="Header">
        <h3>
          <span role="img" aria-label="flower">
            🌺
          </span>
          <Link to="/">이 꽃 뭐야</Link>
        </h3>
        <div className="login">
          {Success}
          {/* <ul>
            <Link to="/login">
              <li>login</li>
            </Link>
            <Link to="/signUp">
              <li>sign up</li>
            </Link>
          </ul> */}
        </div>
      </header>
      <ul>
        <li>
          <Link to="/search">꽃 검색</Link>
        </li>
        <li>
          <Link to="/read">관찰 일기 보기</Link>
        </li>
        <li>
          <Link to="/write">관찰 일기 쓰기</Link>
        </li>
        <li>
          <Link to="/flowerload">꽃길 찾기</Link>
        </li>
      </ul>
    </div>
  );
}

export default connect(
  (state) => ({
    loginSuccess: state.login.loginSuccess,
    login: state.login.login,
  }),
  { initialForm }
)(Navi);
