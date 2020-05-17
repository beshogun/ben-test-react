import React from "react";
import "./spinner.styles.scss";

const Spinner = () => {
  return (
    <div className="container">
      <div>
        <audio src="./../design/pulse.mp4" autoPlay />
      </div>
      <div className="small-circle"></div>
      <div className="medium-circle"></div>
      <div className="circle"></div>
    </div>
  );
};

export default Spinner;
