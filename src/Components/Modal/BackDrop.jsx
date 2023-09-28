import React from "react";
import "./backdrop.css";
const BackDrop = (props) => {
  return (
    props.show && <div className="bg" onClick={props.hideLoginHandler}></div>
  )
};
export default React.memo(BackDrop);
