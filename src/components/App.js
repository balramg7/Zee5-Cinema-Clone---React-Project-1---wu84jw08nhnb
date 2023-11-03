import React, { useState } from "react";
// import Filter from "./filter/Filter.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Navbar from "./Navbar/Navbar.jsx";
import ContentDetails from "./contentDetails/ContentDetails.jsx";
import CarouselCard from "./home/CarouselCard.jsx";
import SignIn from "./loginComponent/SignIn.jsx";
import SignUp from "./registration/SignUp.jsx";
import ResetPass from "./resetPassword/ResetPass.jsx";
import WatchList from "./watchList/WatchList.jsx";
import UserProfile from "./userProfile/UserProfile.jsx";


const App = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(
    !!localStorage.getItem("userToken")
  );

  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar userAuthenticated={userAuthenticated} setUserAuthenticated={setUserAuthenticated}/>
        <Routes>
          <Route path="/" element={<CarouselCard />} />
          <Route path={"/ContentDetails/:_id"} element={<ContentDetails addToWatchlist={addToWatchlist} />} />
          <Route path="/signIn" element={<SignIn setUserAuthenticated={setUserAuthenticated}  />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/resetPass" element={<ResetPass />} />
          <Route path="/watchList" element={<WatchList userToken={localStorage.getItem("userToken")} watchlist={watchlist} setWatchlist={setWatchlist} />} />
          <Route path="/userProfile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
      {/* <Filter /> */}
    </>
  );
};

export default App;
