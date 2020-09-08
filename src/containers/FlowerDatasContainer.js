import React, { useEffect } from "react";
import { getData } from "../models/flowerData";
import { connect } from "react-redux";
import Test from "../components/Test";

const FlowerDatasContainer = ({ getData, flowerdata }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return <Test data={flowerdata} getData={getData}></Test>;
};

export default connect(
  (state) => ({
    flowerdata: state.flowerData.flowerdata,
  }),
  { getData }
)(FlowerDatasContainer);
