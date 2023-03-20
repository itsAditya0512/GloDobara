import React from "react";
import Grpimage from "./Group.png";
import Grp from "./Group1.png";
import "./Inputmain.css";

export default function InputMain() {
  return (
    <>
      <div className="MainContain">
        <h2>Book Appointment</h2>
        <p>Let's Spend A Quality Time Together</p>
        <br />
        <div class="button-main-div">
          <button class="button-div"></button>
          <button class="button-div"></button>
          <button class="button-div"></button>
          <button class="button-div"></button>
          <button class="active-button-div"></button>
          <button class="button-div"></button>
        </div>
        <img className="Img" src={Grp} alt="" />
      </div>
    </>
  );
}
