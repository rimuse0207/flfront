import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

// const BackBox = styled.div`
//   margin-left: 10rem;
//   background-color: white;
//   box-shadow: 3px 3px 0 #cfd2d1;
//   width: 40rem;
//   height: 28rem;
//   padding: 10px;
// `;
// const LoginGrap = styled.div`
//   background-color: #6561e6;

//   height: 4rem;
//   margin: 10px;
//   margin-top: 5px;
//   display: flex;
//   padding-left: 10px;
//   align-items: center;
//   color: white;
//   font-size: 1.3rem;
// `;
// const LoginInput = styled.input`
//   background-color: none;
//   height: 2rem;
//   width: 97%;
//   margin: 10px;
//   border: none;
//   border-bottom: 1px solid gray;
// `;
// const LoginButton = styled.button`
//   background-color: #3f51b5;
//   color: white;
//   height: 3rem;
//   margin: 10px;
//   width: 39rem;
//   font-size: 1.3rem;
// `;
// const LoginBox = styled.div`
//   color: #3f51b5;
//   box-shadow: 1px 1px 0 #cfd2d1;
//   padding: 10px;
//   margin-left: 10px;
//   width: 50%;
//   display: flex;
//   justify-content: center;
//   margin-top: 10px;
//   font-family: upset;
// `;

// const CheckedBox = styled.div`
//   display: flex;
//   justify-content: center;
//   color: red;
// `;

const SignUp = ({ signUp, handleSend, emailOverlap, history, initialForm }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    emailCheck: "",
    password: "",
    passwordCheck: "",
  });
  const [emailWrong, setEmailWrong] = useState(false);
  const [passwordWrong, setPasswordWrong] = useState(false);
  const [finallyed, setFinallyed] = useState(true);

  const { email, emailCheck, password, passwordCheck } = form;
  const handleChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const handleClick = (e) => {
    initialForm();
    setPasswordWrong(false);
    setEmailWrong(false);
    if (email === "" || emailCheck === "") {
      alert("아이디를 입력해 주세요.");
      return;
    } else if (password === "" || passwordCheck === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if (email === emailCheck) {
      if (password === passwordCheck) {
        handleSend(email, password);
        setFinallyed(emailOverlap);
      } else {
        setPasswordWrong(true);
        const nextForm = {
          ...form,
          password: "",
          passwordCheck: "",
        };
        setForm(nextForm);
        return;
      }
    } else {
      setEmailWrong(true);
      const nextForm = {
        ...form,
        email: "",
        emailCheck: "",
      };
      setForm(nextForm);
      return;
    }
  };

  useEffect(() => {
    if (emailOverlap) {
      setForm({
        email: "",
        emailCheck: "",
        password: "",
        passwordCheck: "",
      });
      initialForm();
      history.push("/");
    }
  }, [emailOverlap]);

  const emailChecked = emailWrong ? (
    <div className="CheckBox">Please email Check</div>
  ) : (
    <div></div>
  );
  const passwordChecked = passwordWrong ? (
    <div className="CheckBox">Please password Check</div>
  ) : (
    <div></div>
  );
  const emailOverlapCheck = finallyed ? (
    <div></div>
  ) : (
    <div className="CheckBox">email이 중복됩니다.</div>
  );

  return (
    <div className="BackBox">
      <div className="LginGrap">회원가입</div>

      <input
        className="LgoinInput"
        name="email"
        value={email}
        placeholder="Email"
        onChange={handleChange}
      ></input>

      <input
        className="LgoinInput"
        name="emailCheck"
        value={emailCheck}
        placeholder="Email check"
        onChange={handleChange}
      ></input>
      <input
        className="LgoinInput"
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={handleChange}
      ></input>
      <input
        className="LgoinInput"
        type="password"
        name="passwordCheck"
        value={passwordCheck}
        placeholder="Password check"
        onChange={handleChange}
      ></input>
      {emailChecked}
      {passwordChecked}
      {emailOverlapCheck}
      <button className="LoginButton" onClick={handleClick}>
        <span role="img" aria-label="login">
          🔐
        </span>
        회원가입
      </button>

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
export default withRouter(SignUp);
