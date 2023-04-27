import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../views/Navabar/Navabar";
import About from "../views/About/About";
import Home from "../views/Home/Home";
import SocialMedia from "../views/SocialMedia/SocialMedia";
import Contact from "../views/Contact/Contact";
import Services from "../views/Services/Services";
import Footer from "../views/Footer/Footer";
import Cart from "../views/Cart/Cart";

function Routing() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reactWeb" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/socialMedia" element={<SocialMedia/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>

      <Footer />
    </>
  );
}
export default Routing;