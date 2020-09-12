import React, { useEffect, useState } from "react";
import * as config from "../../conf";
import ReadModal from "./ReadModal";
import "../../Css/compnentesCss/Read.css";

const Read = ({ diaryData, login, postDelete }) => {
  const [show, setShow] = useState(false);
  const [datas, setDatas] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (list) => {
    console.log(list);
    setShow(true);
    setDatas(list);
  };
  const cancel = () => {
    setShow(false);
  };

  const ShowInfo = show ? (
    <ReadModal
      show={show}
      cancel={cancel}
      data={datas}
      login={login}
    ></ReadModal>
  ) : (
    <div></div>
  );

  const handleDelete = (id) => {
    const confirmflag = window.confirm("really?");
    if (confirmflag) {
      console.log("delelte");
      postDelete(id);
      window.location.reload();
    }
  };
  console.log(diaryData);
  const dataForm2 = diaryData ? (
    diaryData.diaryData
      .filter((info) => {
        if (search === "") return diaryData;
        else if (info.flowerName.includes(search)) {
          return info;
        }
      })
      .map((list, i) => {
        const defaulturl = "/thumb_d_8440EFF23B9AE77574B5666A4FB091AA.jpg";
        const url = `${config.SERVER_ADDRESS}/img/${list.imageFile[0]}`;

        return (
          <div className="BOOOOXXX" key={i}>
            <div className="BoxDiv" key={list._id}>
              <img
                src={list.imageFile[0] ? url : defaulturl}
                alt="test"
                width="300"
                height="300"
                onClick={() => handleClick(list)}
                key={list.imageFile}
              ></img>
            </div>
          </div>
        );
      })
  ) : (
    <></>
  );

  return (
    <div style={{ width: "100%", marginLeft: "4%" }}>
      <input
        style={{ display: "block" }}
        className="SearchInput"
        value={search}
        name="search"
        onChange={handleChange}
        placeholder="🔍Search ..."
      ></input>
      {dataForm2}
      {ShowInfo}
    </div>
  );
};

export default Read;
