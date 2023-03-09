import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Banner from "./components/banner/Banner";
import About_concept from "./components/about concept/About_concept";
import UserBooking from "./components/userbooking_component/Userbooking";
import About_physiotherapy from "./components/about_physiotherapy/About_physiotherapy";
import Our_service from "./components/our_service/Our_service";
import Footer_1 from "./components/footer1/Footer_1";
import Apply from "./components/apply_component/apply";
import Error from "./components/error/Error";
import Login from "./components/login/Login";
import UserLogin from "./components/login/user_login/User_Login";
import AdminLogin from "./components/login/admin_login/Admin_Login";
import AdminOtp from "./components/login/admin_otp/AdminOtp";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <>
    //           <Nav />
    //           <Banner />
    //           <About_concept />
    //           <UserBooking />
    //           <About_physiotherapy />
    //           <Our_service />
    //           <Apply />
    //           <Footer_1 />
    //         </>
    //       }
    //     ></Route>
    //     <Route path="/login" element={
    //       <>
    //         <Login/>
    //       </>
    //     }>
    //     </Route>
    //     <Route
    //       path="/about"
    //       element={
    //         <>
    //           <Nav />
    //           <Banner />
    //           <About_concept />
    //           <Footer_1 />
    //         </>
    //       }
    //     ></Route>
    //     <Route
    //       path="/services"
    //       element={
    //         <>
    //           <Nav />
    //           <Banner />
    //           <Our_service />
    //           <Footer_1 />
    //         </>
    //       }
    //     ></Route>
    //     <Route path="*" element={<Error />} />
    //   </Routes>
    // </BrowserRouter>
    <AdminOtp />
    // <UserLogin />
    // <AdminLogin/>
  );
}

export default App;
