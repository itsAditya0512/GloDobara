import React from "react";
import { useState } from "react";
import Footer1 from "../footer1/Footer_1";
import BookingHeader from "./book-appoinmrnt-components/BookingHeader";
import BookingProgressBar from "./book-appoinmrnt-components/BookingProgressBar";
import RadioButton from "./book-appoinmrnt-components/RadioButton";
import ButtomButtonGroup from "./book-appoinmrnt-components/BottomButtonGroup";
import "./bookAppointment5.css";
import image from "./Group1.png";
import adda from "./images/adda.png";
import cards from "./images/cards.png";
import carrom from "./images/carrom.png";
import chess from "./images/chess.png";
import game from "./images/game.png";
import ludo from "./images/ludo.png";
import others from "./images/others.png";
import OthersInputField from "./book-appoinmrnt-components/OthersInputField";

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
            <RadioButton value="adda" title="Adda" img={adda} />
            <RadioButton value="cards" title="Playing Cards" img={cards} />
            <RadioButton value="chess" title="Chess" img={chess} />
          </div>
          <div className="element-row-div">
            <RadioButton value="ludo" title="Ludo" img={ludo} />
            <RadioButton value="carrom" title="Carrom" img={carrom} />
            <RadioButton value="game" title="Video Game" img={game} />
          </div>
          <div className="element-row-div2">
            <RadioButton value="others" title="Others" img={others} />
          </div>
          <OthersInputField />
          <ButtomButtonGroup />
        </div>
      </div>
      <Footer1 />
    </>
  );
}
