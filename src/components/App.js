import React, { useState } from "react";
import "../styles/App.css";
import ContentDetails from "./contentDetails/ContentDetails.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarouselCard from "./home/CarouselCard.jsx";
import SignUp from "./registration/SignUp.jsx";
import SignIn from "./loginComponent/SignIn.jsx";
import ResetPass from "./resetPassword/resetPass.jsx";
import WatchList from "./watchList/WatchList.jsx";


const App = () => {

  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CarouselCard />} />
          <Route path={"/ContentDetails/:_id"} element={<ContentDetails addToWatchlist={addToWatchlist} />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/resetPass" element={<ResetPass />} />
          <Route path="/watchList" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
      {/* <WatchList /> */}
      {/* <ContentDetails /> */}
    </>
  );
};

export default App;
