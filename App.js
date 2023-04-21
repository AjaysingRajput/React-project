import React from "react";
import ReactDOM from 'react-dom/client'
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(){
  return (
  <Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
  </Routes>
  </Router>
  )
}
export default App;
