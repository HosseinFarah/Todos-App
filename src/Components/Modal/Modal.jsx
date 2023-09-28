import React from "react";
import "./Modal.css";
import BackDrop from "./BackDrop";
const Modal = (props) => {
  return (
    <>
      <BackDrop show={props.show}  hideLoginHandler = {props.hideLoginHandler}/>
      <div
        className="modal"
        style={{
          transform: props.show ? "translateX(0)" : "translateX(-100vw)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </>
  );
};
export default React.memo(Modal);
