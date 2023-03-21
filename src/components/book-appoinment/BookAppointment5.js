import React from "react";
import Banner from "../banner/Banner";
import Footer1 from "../footer1/Footer_1";
import Footer_2 from "../footer2/Footer_2";
import Nav from "../nav/Nav";
import BookingHeader from "./book-appoinmrnt-components/BookingHeader";
import BookingProgressBar from "./book-appoinmrnt-components/BookingProgressBar";
import RadioButton from "./book-appoinmrnt-components/RadioButton";
import "./bookAppointment5.css";
import image from "./Group1.png";
export default function Bookapointment5() {
  return (
    <>
      <BookingHeader />
      <BookingProgressBar value="5" />
      {/* here i'm using a string value 5 which indicates the progress */}
      <div className="middle-part">
        <div className="image-div">
          <img src={image} className="left-image" />
        </div>
        <div className="element-div">
          <div className="element-row-div">
            <RadioButton value="adda" title="Adda" />
            <RadioButton value="cards" title="Playing Cards" />
            <RadioButton value="chess" title="Chess" />
          </div>
          <div className="element-row-div">
            <RadioButton value="ludo" title="Ludo" />
            <RadioButton value="carrom" title="Carrom" />
            <RadioButton value="game" title="Video Game" />
          </div>
          <div className="element-row-div2">
            <RadioButton value="others" title="Others" />
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
}
