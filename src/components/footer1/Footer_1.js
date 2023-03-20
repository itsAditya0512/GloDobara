import React from "react";
import "../footer1/footer1.css";
import insta from "../footer1/img/insta.svg";
import facebook from "../footer1/img/facebook.svg";
import twitter from "../footer1/img/twitter.svg";
import whatsapp from "../footer1/img/whatsapp.svg";
import mail from "../footer1/img/mail.svg";
import { FaEnvelope } from "react-icons/fa";
export default function Footer1() {
  return (
    <>
      <section className="footer1">
        <div className="foot-wrap">
          <div className="box-foot">
            <p className="vv">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {/* <h6>Name Name</h6> */}
          </div>
          <div className="box-feet">
            <h4>| find us here</h4>
            <div className="social">
              <div className="sc-icon">
                <a href="#">
                  <img src={insta} alt="" />
                </a>
                <a href="#">
                  <img src={facebook} alt="" />
                </a>
                <a href="#">
                  <img src={twitter} alt="" />
                </a>
                <a href="#">
                  <img src={whatsapp} alt="" />
                </a>
              </div>
            </div>
            <h4>| ask us here</h4>
            <div className="social">
              <div className="sc-icon">
                <a href="#">
                  <img src={whatsapp} alt="" />
                </a>
                <a href="#">
                <img src={mail} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </section>
    </>
  );
}
