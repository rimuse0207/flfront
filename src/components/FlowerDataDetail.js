import React from "react";
import "../Css/compnentesCss/Detail.css";

const FlowerDataDetail = ({
  name,
  datadetail,
  clCodeNm,
  distbNm,
  postngplaceCodeNm,
  prpgtEraInfo,
  soilInfo,
  orgplceInfo,
  lighttdemanddoCodeNm,
  lefmrkCodeNm,
  fncltyInfo,
  frtlzrInfo,
  grwhTpCodeNm,
  watercycleAutumnCodeNm,
  watercycleSprngCodeNm,
  watercycleSummerCodeNm,
  watercycleWinterCodeNm,
  winterLwetTpCodeNm,
}) => {
  console.log(datadetail);

  return (
    <div className="DetailBox">
      <h1>{name}</h1>
      <div>{JSON.stringify(clCodeNm)}</div>
      <div>{JSON.stringify(fncltyInfo)}</div>
      <div>{JSON.stringify(lefmrkCodeNm)}</div>
      <div>
        <h1>물주기</h1>
        <div>🌸봄: {JSON.stringify(watercycleSprngCodeNm)}</div>
        <div>☀️여름: {JSON.stringify(watercycleSummerCodeNm)}</div>
        <div>🍂가을: {JSON.stringify(watercycleAutumnCodeNm)}</div>
        <div>⛄️겨울: {JSON.stringify(watercycleWinterCodeNm)}</div>
      </div>
      <div>
        <h1>온도</h1>
        <div>🌡{JSON.stringify(grwhTpCodeNm)}</div>
        <div>겨울 온도: {JSON.stringify(winterLwetTpCodeNm)}</div>
      </div>
      <div>
        <h1>광도 및 배치</h1>
        <div>🌞{JSON.stringify(lighttdemanddoCodeNm)}</div>
        <div>{JSON.stringify(postngplaceCodeNm)}</div>
      </div>
      <div>
        <h1>서식지 및 파종</h1>
        <div>🇰🇷{JSON.stringify(orgplceInfo)}</div>
        <div>{JSON.stringify(prpgtEraInfo)}</div>
      </div>
      <div>
        <h1>비료 및 토양</h1>
        <div>{JSON.stringify(frtlzrInfo)}</div>
        <div>{JSON.stringify(soilInfo)}</div>
      </div>
    </div>
  );
};

export default FlowerDataDetail;
