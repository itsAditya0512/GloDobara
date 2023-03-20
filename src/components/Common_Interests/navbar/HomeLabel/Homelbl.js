import React from "react";
import "./homelbl.css";
import { MdDoubleArrow } from "react-icons/md";

export default function Homelbl() {
  return (
    <div className="fhd">
      <a className="bb" href="#">Home</a>
      <a className="arr"><MdDoubleArrow /></a>
      <a className="bb" href="#">Service</a>
    </div>
  );
}
