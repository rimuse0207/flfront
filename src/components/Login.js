import React, { useState, useEffect } from "react";

import { withRouter } from "react-router-dom";

import "../Css/compnentesCss/login.css";


const Login = ({
  sendOn,
  emailCheck,
  passwordCheck,
  handleSend,
  history,
  loginSuccess,
  initialForm,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleSend(email, password);
    setPassword("");
  };

  useEffect(() => {
    if (loginSuccess) {
      setEmail("");
      setPassword("");
      history.goBack("/");
    } else {
    }
  }, [loginSuccess]);

  const Check =
    emailCheck || passwordCheck ? (
      <div></div>
    ) : (
      <div className="CheckBox">아이디/비밀번호를 다시 확인해 주세요</div>
    );

  return (
    <div className="BackBox">
      <div className="LginGrap">로그인</div>
      <form className="goBottom">
        <div className="divBoxd">
          <input
            className="FlowerNameInput"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          ></input>
          <label className="FlowerNameLabel">EMAIL</label>
        </div>
        <div className="divBoxd">
          <input
            className="FlowerNameInput"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}
          ></input>
          <label className="FlowerNameLabel">PassWord</label>
        </div>
        {Check}
        <button className="LoginButton" onClick={handleClick}>
          <span role="img" aria-label="login">
            🔐
          </span>
          로그인
        </button>
      </form>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="LoginBox">
          <span role="img" aria-label="signup">
            👤
          </span>
          회원 가입
        </div>
        <div className="LoginBox">
          <span role="img" aria-label="key">
            🔑
          </span>
          비밀번호 찾기
        </div>
      </div>
    </div>
  );
};
export default withRouter(Login);
