import React, { useEffect, useState } from "react";

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

  const dataForm2 = diaryData ? (
    diaryData.diaryData
      .filter((info) => {
        if (search === "") return diaryData;
        else if (info.flowerName.includes(search)) {
          return info;
        }
      })
      .map((list, i) => {
        const defaulturl =
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.huffingtonpost.kr%2F2017%2F04%2F19%2Fstory_n_16094274.html&psig=AOvVaw3Szv5L7uLiPYjr6cZCRXCB&ust=1591375134371000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDqxsLM6OkCFQAAAAAdAAAAABAJ";
        const url = `${process.env.REACT_APP_SERVER_ADDRESS}/img/${list.imageFile[0]}`;

        return (
          <div key={i}>
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
