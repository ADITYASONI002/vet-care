import React from "react";
import {Route,Routes} from 'react-router-dom'
import Navbar from "../views/Navabar/Navabar"
import About from '../views/About/About'
import Home from "../views/Home/Home";
import Blog from "../views/Blog/Blog"
import Contact from "../views/Contact/Contact"
import Refer from "../views/Refer A friend/Refer"
import Services from "../views/Services/Services"
import Footer from "../views/Footer/Footer"

function Routing(){
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/"element={<Home></Home>}></Route>
                <Route path="/home"element={<Home></Home>}></Route>
                <Route path="/about"element={<About></About>}></Route>
                <Route path="/blog"element={<Blog></Blog>}></Route>
                <Route path="/contact"element={<Contact></Contact>}></Route>
                <Route path="/refer"element={<Refer></Refer>}></Route>
                <Route path="/services"element={<Services></Services>}></Route>
            </Routes>
            
            <Footer/>
        </>
    )
    
}
export default Routing;