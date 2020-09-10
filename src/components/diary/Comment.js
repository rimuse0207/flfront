import React, { useEffect } from "react";

const Comment = ({ data }) => {
  console.log(data);
  const commentOn = data.map((list) => {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span key={list.useredName}>{list.useredName}</span>
          <span style={{ fontSize: "0.5rem", color: "gray" }}>
            {list.date.substr(0, 10)}
            {"  "}
            {list.date.substr(11, 6)}
          </span>
        </div>
        <div style={{ marginLeft: "3rem" }}>{list.descreption}</div>
      </>
    );
  });
  return <div>{commentOn}</div>;
};

export default Comment;
