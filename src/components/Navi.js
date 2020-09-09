import React from "react";
import { Link } from "react-router-dom";
import "../Css/compnentesCss/Navi.css";
function Navi() {
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
          <ul>
            <Link to="/login">
              <li>login</li>
            </Link>
            <Link to="/signUp">
              <li>sign up</li>
            </Link>
          </ul>
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

export default Navi;
