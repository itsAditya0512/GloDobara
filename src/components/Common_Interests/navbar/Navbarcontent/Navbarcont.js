import React from "react";
import "./Navbarcont.css";
import { BiUserCircle } from "react-icons/bi";
// import vect from "../../../Common_Interests/Vector.png";
// import logo from "../../Common_Interests/l.png";
// import sp from "../../Common_Interests/spcb.png";

export default function navbar() {
  return (
    <>
      <div className="shb">
        <a>Home</a>
        <a>About Us</a>
        <a>Contacts</a>
        <a>Services</a>
        <h1> <BiUserCircle/></h1>
        <a className="ff">Login/signup</a>
      </div>
    </>
  );
}
