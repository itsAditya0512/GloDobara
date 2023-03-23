import React from "react";
import "./othersInputField.css";

export default function OthersInputField(props) {
  return (
    <div className="others-div">
      <div className="name-tag">
        <p>Others</p>
      </div>
      <input className="input-field" placeholder="Comments"></input>
    </div>
  );
}
