import React from 'react';
import '../styles/App.css';
import Home from './Home/Home.jsx';
import Navbar from './Navbar/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {


  return (
    <div id="main">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
