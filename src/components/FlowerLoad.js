import React, { useState } from "react";

import ModalPra from "./ModalPra";

import { Icon } from "react-icons-kit";
import { mapMarker } from "react-icons-kit/fa/mapMarker";
import "../Css/compnentesCss/FlowerLoad.css";
const FlowerLoad = ({ data }) => {
  const [search, setSearch] = useState("");
  const [mapCheck, setMapCheck] = useState(false);
  const [mapX, setMapX] = useState(0);
  const [mapY, setMapY] = useState(0);
  const [position, setPosition] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleMapCheck = (x, y, position) => {
    setMapX(x);
    setMapY(y);
    setPosition(position);
    setMapCheck(true);
  };
  const handleMapClose = () => {
    setMapX(0);
    setMapY(0);
    setPosition("");
    setMapCheck(false);
  };

  const MapChecked = mapCheck ? (
    <div className="MapBox">
      <ModalPra
        checked={mapCheck}
        close={handleMapClose}
        x={mapX}
        y={mapY}
        position={position}
      ></ModalPra>
    </div>
  ) : (
    <div></div>
  );

  const dataCheck = data ? (
    data.data.MgisSpringStreet.row
      .filter((info) => {
        if (search == null) return info;
        else if (
          info.COT_ADDR_FULL_OLD.toLowerCase().includes(search.toLowerCase()) ||
          info.COT_VALUE_03.toLowerCase().includes(search.toLowerCase()) ||
          info.COT_VALUE_02.toLowerCase().includes(search.toLowerCase()) ||
          info.COT_ADDR_FULL_NEW.toLowerCase().includes(search.toLowerCase()) ||
          info.COT_CONTS_NAME.toLowerCase().includes(search.toLowerCase())
        ) {
          return info;
        }
      })
      .map((list) => {
        const max = Math.ceil(3);
        const min = Math.floor(0);
        const randoms = Math.floor(Math.random() * (max - min) + min);
        let back = "";
        if (randoms == 1) {
          back = "#E14245";
        } else if (randoms == 2) {
          back = "skyblue";
        } else {
          back = "#4ADA56";
        }

        return (
          <div className="Animation">
            <div
              className="FlowerBox"
              id="rootModal"
              key={list.COT_CONTS_ID}
              back={back}
              onClick={() =>
                handleMapCheck(
                  list.COT_COORD_X,
                  list.COT_COORD_Y,
                  list.COT_ADDR_FULL_OLD
                )
              }
            >
              <div className="InfoBox" key={list.COT_CONTS_ID}>
                <Icon icon={mapMarker} size={64} />
                <h3>{list.COT_ADDR_FULL_OLD}</h3>
                개화시기: {list.COT_VALUE_03}( {list.COT_VALUE_04} )
              </div>
              <div>
                {list.COT_VALUE_01}
                {list.COT_VALUE_02}
              </div>
            </div>
          </div>
        );
      })
  ) : (
    <div>...Loading</div>
  );

  return (
    <div style={{ marginLeft: "5%" }}>
      <input
        className="SearchInput"
        value={search}
        name="search"
        onChange={handleChange}
        placeholder="🔍Search ..."
      ></input>
      <div className="BorderBox">"{dataCheck}</div>
      {MapChecked}
    </div>
  );
};

export default FlowerLoad;
