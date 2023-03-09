import logo from "./logo.png";
import bglogo from "./background.png";
import "./adminotp.css";

function AdminOtp() {
  return (
    <div className="screen d flex">
      <div className="App">
        <div className="App-image">
          <div className="App-logo">
            <img src={logo} className="Logo" alt="logo" />
          </div>
        </div>
        <div classname="app-text">
          <div className="Text">
            <h1 className="h1" id="screen">
              Welcome back
            </h1>
            <h3 className="h2">Super Am in OR Admin Login</h3>
            <h4 className="h4">
              A security code is sent to your registered mobile number <br />
              or your Email id
            </h4>
            <h3 className="h2-1">Security code</h3>
          </div>
          <div classname="input">
            <input className="text-input" type="text"></input>
            <button className="text-button" type="button">
              Resend
            </button>
            <button className="text-button1" type="button">
              Verify
            </button>
            <button className="text-button2" type="button">
              Try Again?
            </button>
            <button className="text-button3" type="button">
              Go Back?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminOtp;
