import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="contactBg">
        <p className="contactHead">Contact Us</p>
      </div>
      <div className="contactCont">
        <div id="left">
          <p>Make an Appointment</p>
          <form>
            <input className="inputs" type="text" placeholder="Name"></input>
            <input className="inputs" type="email" placeholder="email"></input>
            <select className="inputs" name="Services">
              <option>Select Services</option>
              <option>Grooming</option>
              <option>Vaccination</option>
              <option>Training</option>
            </select>
            <input className="inputs" type="date"></input>
            <input className="inputs" type="time" placeholder=""></input>
            <button className="btn btn-primary">Book Appointment</button>
          </form>
        </div>
        <div id="right">
          <div>
            <span>Address</span>
            <p>A-43 Pratp Vihar Colony Govindam Tower, Jaipur, Rajasthan</p>
          </div>
          <div>
            <span>Mobile</span>
            <p>7727007413</p>
          </div>
          <div>
            <span>Email</span>
            <p>soniadityachhapoli2002@gmail.com</p>
          </div>
          <div>
            <span>Instagram</span>
            <p>_aditya_2002</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
