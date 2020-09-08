import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import FlowerDataDetailContainer from "../containers/FlowerDetailContainer";

Modal.setAppElement("#rootModal");

function ModalDetail({ number, cancel, detailon, backUrl, name }) {
  const [modalIsOpen] = React.useState(detailon);
  console.log(backUrl);
  function closeModal() {
    cancel();
  }
  const asdads = {
    width: "100%",

    backgroundImage: `url(${backUrl})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "auto",
  };
  const customStyles = {
    content: {
      width: "70%",
      padding: "0",
      height: "90%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      filter: "alpha(opacity=30)",
    },
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div style={asdads}>
          <div>
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
