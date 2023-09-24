import React from "react";
import "../styles/App.css";
import Navbar from "./Navbar/Navbar.jsx";
import CarouselCard from "./home/CarouselCard.jsx";

const App = () => {
  return (
    <div id="main">
      <Navbar />
      <CarouselCard />
      
    </div>
  );
};

export default App;
