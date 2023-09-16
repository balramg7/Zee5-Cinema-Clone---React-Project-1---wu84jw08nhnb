import React from 'react';
import '../styles/App.css';
import Home from './Home/Home.jsx';
import Navbar from './Navbar/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {


  return (
    <div id="main">
      
      {/* <Navbar />
      <Routes>
        <Route path='/index' element={<Home />}/>
      </Routes> */}
      <Home />
    </div>
  )
}


export default App;
