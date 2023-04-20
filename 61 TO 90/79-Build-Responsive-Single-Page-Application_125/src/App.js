import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/jsx/Menu";
import Contact from "./components/jsx/Contact";
import Services from "./components/jsx/Services";
import About from "./components/jsx/About";





const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="/service" element={<Services/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>


    </>
  );
};

export default App;
