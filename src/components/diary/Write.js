import React, { useState, useEffect } from "react";

import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";

import "../../Css/compnentesCss/Write.css";

import "react-datepicker/dist/react-datepicker.css";

const Write = ({ handleSend, login, history }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [file, setFile] = useState("");
  const [file2, setFile2] = useState("");
  const [fileObj, setFileObj] = useState([]);
  const [fileArray, setFileArray] = useState([]);

  const [form, setForm] = useState({
    useredName: login.useredName,
    imageFile: {},
    date: new Date(),
    flowerName: "",
    title: "",
    descreption: "",
  });
  const handleChangeDiary = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const handleChange = (date) => {
    setStartDate(date);
    setForm({
      ...form,
      date: date,
    });
  };

  const uploadMultipleFiles = (e) => {
    fileObj.push(e.target.files);
    console.log(fileObj);
    console.log(e.target.files[0]);
    setFile2(e.target.files);

    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
    setFile({ file: fileArray });
    setForm({
      ...form,
      imageFile: fileArray,
    });
    setFileObj([]);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (
      form.flowerName === "" ||
      form.title === "" ||
      form.descreption === ""
    ) {
      console.log("error");
      alert("전부 써주세요.");
      return;
    } else {
      const nextForm = {
        ...form,
        imageFile: file,
        date: startDate,
      };
      setForm(nextForm);

      console.log(file2);
      handleSend(
        form,
        file2,
        form.useredName,
        form.date,
        form.flowerName,
        form.title,
        form.descreption
      );

      setForm({
        useredName: login.useredName,
        imageFile: {},
        date: new Date(),
        flowerName: "",
        title: "",
        descreption: "",
      });
      setFileArray([]);
      setFileObj([]);
      //history.push("/read");
      //window.location.reload();
    }
  };

  return (
    <div className="BOXS">
      <h2>관찰 일기 쓰기</h2>
      <div>
        {(fileArray || []).map((url) => (
          <img key={url} src={url} alt="..." width="150" height="150" />
        ))}
      </div>
      <form
        className="goBottom"
        onSubmit={handleClick}
        encType="multipart/form-data"
      >
        <input
          type="file"
          name="img"
          accept="image/jpg,impge/png,image/jpeg,image/gif"
          onChange={uploadMultipleFiles}
          multiple
        ></input>

        <div className="divBoxd">
          <input
            className="FlowerNameInput"
            name="flowerName"
            placeholder="꽃 이름"
            value={form.flowerName}
            onChange={handleChangeDiary}
          ></input>
          <label className="FlowerNameLabel">꽃 이름</label>
        </div>
        <div className="divBoxd">
          <input
            className="FlowerNameInput"
            name="title"
            placeholder="제목"
            value={form.title}
            onChange={handleChangeDiary}
          ></input>
          <label className="FlowerNameLabel">제목</label>
        </div>
        <div className="divBoxd">
          <textarea
            className="DesTextArea"
            name="descreption"
            value={form.descreption}
            onChange={handleChangeDiary}
          ></textarea>
          <label className="FlowerNameLabel">내용</label>
        </div>
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          placeholder="날짜"
        ></DatePicker>
        <button className="LoginButton" type="submit">
          일기 저장
        </button>
      </form>
    </div>
  );
};
export default withRouter(Write);
