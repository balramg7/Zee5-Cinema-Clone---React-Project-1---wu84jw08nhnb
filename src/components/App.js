import React from "react";
import "../styles/App.css";
import Navbar from "./Navbar/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarouselCard from "./home/CarouselCard.jsx";
import SignUp from "./registration/SignUp.jsx";
import SignIn from "./loginComponent/SignIn.jsx";
import ResetPass from "./resetPassword/resetPass.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CarouselCard />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/resetPass" element={<ResetPass />} />
      </Routes>
      </BrowserRouter>
      
      {/* <SignIn /> */}
      {/* <ResetPass /> */}
    </>
  );
};

export default App;
