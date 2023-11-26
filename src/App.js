import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Appointment from "./components/Appointment";
import Services from "./components/Services";

const App = () => {
  return (
    <Router>
      {/* <Home/>
      <About/> */}
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      
    </Router>
  );
};

export default App;
