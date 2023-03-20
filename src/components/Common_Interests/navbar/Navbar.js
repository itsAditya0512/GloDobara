import React from "react";
import "./navbar.css";
import logo from "../../Common_Interests/l.png";
import sp from "../../Common_Interests/spcb.png";
import Navbarcont from "../../Common_Interests/navbar/Navbarcontent/Navbarcont";
import Homelbl from "./HomeLabel/Homelbl";

export default function navbar() {
  return (
    <div class="rectangle-4-EAo" id="1:5">
      <div>
        <img src={logo} className="Logo" alt="" />
        <Navbarcont />
      </div>
      <div>
        <img src={sp} className="Family" alt="" />
        <Homelbl />
      </div>
    </div>
  );
}
