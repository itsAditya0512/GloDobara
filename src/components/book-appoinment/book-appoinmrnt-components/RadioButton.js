import "./radioButton.css";
import React from "react";
import { FaGamepad } from "react-icons/fa";

export default function RadioButton(props) {
  return (
    <label className="radioButton" for={props.title}>
      <input
        type="radio"
        className="input-button"
        id={props.title}
        name="radio"
        value={props.value}
      />
      <label className="buttonlabel" for={props.title}>
        <div className="name">
          <FaGamepad className="icon" />
          <p>{props.title}</p>
        </div>
      </label>
    </label>
  );
}
