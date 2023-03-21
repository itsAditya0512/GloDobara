import React from "react";
import Banner from "../../banner/Banner";
import "./bookingHeader.css";
import RadioButton from "./RadioButton";
import image from "./l.png";
import Nav from "../../nav/Nav";
export default function BookingHeader() {
  return (
    <>
      <div className="background-image">
        <div>
          <Nav />
        </div>
      </div>
    </>
  );
}
