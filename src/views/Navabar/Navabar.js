import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import style from './Navbar.css'
import logo from './images/Vetcare-removebg-preview.png'
import menu from './images/menu.png'
import close from './images/close.png'

function Navbar() {

    const navigate=useNavigate();

    return (
        <>
            <nav class="navbar navbar-expand-lg =">
                <div class="container-fluid">
                    <div className="logoCont">
                    <img src={logo} className="navbar-brand"></img>
                    <p id="logoName"> <span id="vetcare"> Vetcare </span><br></br>One Stop Solution</p>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" onClick={()=>navigate('/home')} >Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" onClick={()=>navigate('/about')} >About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" onClick={()=>navigate('/refer')} >Refer a friend</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" onClick={()=>navigate('/services')} >Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" onClick={()=>navigate('/blog')} >Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" onClick={()=>navigate('/contact')} >Contact us</a>
                            </li>
                        </ul>

                    </div>
            </nav>
        </>
    )
}
export default Navbar;