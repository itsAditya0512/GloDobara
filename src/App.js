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
import Footer_2 from "./components/footer2/Footer_2";
import React, { useState, useEffect, CSSProperties } from "react";
import SyncLoader from "react-spinners/PuffLoader";
import More_concept from "./components/about concept/More_concept";
import Book_appointment2 from "./components/book-appoinment/Book_appointment2";
import RadioButton from "./components/book-appoinment/book-appoinmrnt-components/RadioButton";
import Bookapointment5 from "./components/book-appoinment/BookAppointment5";
import BookingHeader from "./components/book-appoinment/book-appoinmrnt-components/BookingHeader";

function App() {
  const [loading, setloading] = useState(true);
  const override = {
    // margin: "0 auto",
    // borderRadius: "50%",
    // borderWidth: "4px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };
  const speed = 2,
    colorLoader = "var(--pink)",
    siZE = 70;
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <>
    //           {loading ? (
    //             <SyncLoader
    //               color={colorLoader}
    //               cssOverride={override}
    //               loading
    //               size={siZE}
    //               speedMultiplier={speed}
    //               myprops={"Loading"}
    //             />
    //           ) : (
    //             <>
    //               <Nav />
    //               <Banner />
    //               <About_concept />
    //               <UserBooking />
    //               <About_physiotherapy />
    //               <Our_service />
    //               <Apply />
    //               <Footer_1 />
    //               <Footer_2 />
    //             </>
    //           )}
    //         </>
    //       }
    //     ></Route>
    //     <Route
    //       path="/login"
    //       element={
    //         <>
    //           {loading ? (
    //             <SyncLoader
    //               color={colorLoader}
    //               cssOverride={override}
    //               loading
    //               size={siZE}
    //               speedMultiplier={speed}
    //               myprops={"Loading"}
    //             />
    //           ) : (
    //             <>
    //               <Login />
    //             </>
    //           )}
    //         </>
    //       }
    //     ></Route>
    //     <Route
    //       path="/about"
    //       element={
    //         <>
    //           {loading ? (
    //             <SyncLoader
    //               color={colorLoader}
    //               cssOverride={override}
    //               loading
    //               size={siZE}
    //               speedMultiplier={speed}
    //               myprops={"Loading"}
    //             />
    //           ) : (
    //             <>
    //               <Nav />
    //               <Banner />
    //               <More_concept />
    //               <Footer_1 />
    //               <Footer_2 />
    //             </>
    //           )}
    //         </>
    //       }
    //     ></Route>
    //     <Route
    //       path="/services"
    //       element={
    //         <>
    //           {loading ? (
    //             <SyncLoader
    //               color={colorLoader}
    //               cssOverride={override}
    //               loading
    //               size={siZE}
    //               speedMultiplier={speed}
    //               myprops={"Loading"}
    //             />
    //           ) : (
    //             <>
    //               <Nav />
    //               <Banner />
    //               <Our_service />
    //               <Footer_1 />
    //               <Footer_2 />
    //             </>
    //           )}
    //         </>
    //       }
    //     ></Route>
    //     <Route
    //       path="/bookapointment"
    //       element={
    //         <>
    //           {loading ? (
    //             <SyncLoader
    //               color={colorLoader}
    //               cssOverride={override}
    //               loading
    //               size={siZE}
    //               speedMultiplier={speed}
    //               myprops={"Loading"}
    //             />
    //           ) : (
    //             <>
    //               <Nav />
    //               <Banner />
    //               <Book_appointment2 />
    //               <Footer_1 />
    //               <Footer_2 />
    //             </>
    //           )}
    //         </>
    //       }
    //     ></Route>
    //     <Route
    //       path="/user_Login"
    //       element={
    //         <>
    //           {loading ? (
    //             <SyncLoader
    //               color={colorLoader}
    //               cssOverride={override}
    //               loading
    //               size={siZE}
    //               speedMultiplier={speed}
    //             />
    //           ) : (
    //             <>
    //               <Error />
    //             </>
    //           )}
    //         </>
    //       }
    //     />

    //     <Route
    //       path="*"
    //       element={
    //         <>
    //           {loading ? (
    //             <SyncLoader
    //               color={colorLoader}
    //               cssOverride={override}
    //               loading
    //               size={siZE}
    //               speedMultiplier={speed}
    //             />
    //           ) : (
    //             <>
    //               <Error />
    //             </>
    //           )}
    //         </>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
    <Bookapointment5 />
  );
}

export default App;
