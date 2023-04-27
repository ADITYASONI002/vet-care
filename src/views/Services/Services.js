import React from "react";
import "./Services.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";

function Services() {
  return (
    <>
      <div className="servicesCont">
        <span>Our Services</span>
      </div>

      <div className="services">
        <div id="headTagPara">
          <span id="headTag">
            This is the only place <br></br>for all your pet care{" "}
          </span>
          <span id="headPara">
            We offer quick & easy services for both dogs and cat of various
            breeds.<br></br> No matter their size or age, we can provide
            positive grooming experience.
          </span>
        </div>
        <div className="serviceContainers">
          <div className="servicesChildCont">
            <img src={img1} className="serviceImg" alt="..."></img>
            <p className="serviceTitle">Pup Care Advice</p>
            <p className="servicePara">Our grooming department is constantly busy, catering to a wide variety of cats and dogs with expert grooming and clipping.</p>
          </div>
          <div className="servicesChildCont">
            <img src={img2} className="serviceImg" alt="..."></img>
            <p className="serviceTitle">Grooming</p>
            <p className="servicePara">Our grooming department is constantly busy, catering to a wide variety of cats and dogs with expert grooming and clipping.</p>
          </div>
          <div className="servicesChildCont">
            <img src={img3} className="serviceImg" alt="..."></img>
            <p className="serviceTitle">Vaccination</p>
            <p className="servicePara">Our grooming department is constantly busy, catering to a wide variety of cats and dogs with expert grooming and clipping.</p>
          </div>
          <div className="servicesChildCont">
            <img src={img4} className="serviceImg" alt="..."></img>
            <p className="serviceTitle">Dog Training</p>
            <p className="servicePara">Our grooming department is constantly busy, catering to a wide variety of cats and dogs with expert grooming and clipping.</p>
          </div>
          <div className="servicesChildCont">
            <img src={img5} className="serviceImg" alt="..."></img>
            <p className="serviceTitle">General Checkup</p>
            <p className="servicePara">Our grooming department is constantly busy, catering to a wide variety of cats and dogs with expert grooming and clipping.</p>
          </div>
          <div className="servicesChildCont">
            <img src={img6} className="serviceImg" alt="..."></img>
            <p className="serviceTitle">Pharmacy</p>
            <p className="servicePara">Our grooming department is constantly busy, catering to a wide variety of cats and dogs with expert grooming and clipping.</p>
          </div>
          <div className="servicesChildCont">
            <img src={img7} className="serviceImg" alt="..."></img>
            <p className="serviceTitle">Pet Accessories</p>
            <p className="servicePara">Our grooming department is constantly busy, catering to a wide variety of cats and dogs with expert grooming and clipping.</p>
          </div>
          <div className="servicesChildCont">
            <img src={img7} className="serviceImg" alt="..."></img>
            <p className="serviceTitle">Pet Accessories</p>
            <p className="servicePara">Our grooming department is constantly busy, catering to a wide variety of cats and dogs with expert grooming and clipping.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
