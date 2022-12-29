import React from "react";
import style from './Home.css'
function Home() {
    return (
        <>
            <div className="cont-1">
                <div className="cont-1Child">
                    <p className="headTag">Petcare</p>
                    <div className="list">
                        <span className="listItems">Vet Visit</span>
                        <span className="listItems">Nursing Care</span>
                        <span className="listItems">Grooming</span>
                        <span className="listItems">Vaccination</span>
                    </div>
                </div>
                <div className="cont-1Child">
                    <p className="headTag">Pet Mart</p>
                    <div className="list">
                        <span className="listItems">Fovel</span>
                        <span className="listItems">Bakery Item</span>
                        <span className="listItems">Medicene</span>
                        <span className="listItems">Toy/Accessories</span>
                    </div>
                </div>
                <div className="cont-1Child">
                    <p className="headTag">Dog/Cat</p>
                    <div className="list">
                        <span className="listItems">Register your dog</span>
                        <span className="listItems">Register your Cat</span>
                        <span className="listItems">Ask for Cat</span>
                        <span className="listItems">Ask for dog</span>
                    </div>
                </div>
                <div className="cont-1Child">
                    <p className="headTag">Breeding</p>
                    <div className="list">
                        <span className="listItems">Find your match</span>
                        <span className="listItems">Search your breed</span>
                        <span className="listItems">Half Breed</span>
                        <span className="listItems">Full Breed</span>
                    </div>
                </div>
                <div className="cont-1Child">
                    <p className="headTag">Lab Test</p>
                    <div className="list">
                        <span className="listItems">Book your slot</span>
                        <span className="listItems">Dog</span>
                        <span className="listItems">Cat</span>
                        <span className="listItems">Other</span>
                    </div>
                </div>
                <div className="cont-1Child">
                    <p className="headTag">Online <br></br> Consult</p>
                    <div className="list">
                        <span className="listItems">Book your Slot</span>
                        <span className="listItems">Make a call</span>
                        <span className="listItems">Make a video call</span>
                        <span className="listItems">Consult via Chat</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;