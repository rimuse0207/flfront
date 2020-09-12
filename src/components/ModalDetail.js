import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import FlowerDataDetailContainer from "../containers/FlowerDetailContainer";

import "../Css/compnentesCss/ModalDetail.css";
Modal.setAppElement("#rootModal");

function ModalDetail({ number, cancel, detailon, backUrl, name }) {
  const [modalIsOpen] = React.useState(detailon);
  console.log(`url(${backUrl})`);
  function closeModal() {
    cancel();
  }
  const modalstyles = {
    width: "100%",
    backgroundImage: `url(${backUrl})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "auto",
  };
  const customStyles = {
    content: {
      padding: "0",
      height: "70%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      filter: "alpha(opacity=30)",
    },
  };
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div style={modalstyles}>
          <div className="backGround">
            <h2>🌴식물 정보</h2>
            <FlowerDataDetailContainer
              number={number}
              name={name}
              close={closeModal}
            ></FlowerDataDetailContainer>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalDetail;

ReactDOM.render(
  <ModalDetail></ModalDetail>,
  document.getElementById("rootModal")
);
