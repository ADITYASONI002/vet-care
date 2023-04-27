import React from "react";
import "./SocialMedia.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";
import img10 from "./images/img10.jpg";
// import vid1 from './images/vid1.mp4'
import vid2 from "./images/vid2.mp4";

function SocialMedia() {
  return (
    <>
      <div className="socialMediaBg">
        <span>Social Media</span>
      </div>

      <div className="socialMediaCont">
        <div className="socialMediaLeft">
          <div className="socialMediaLeftChildCont">
            <img className="socialMediaImg" src={img1} alt=""></img>
            <span className="socialMediaTitle">
              When your dog feel dehydrated
            </span>
            <sapn className="socialMediaPara">
              A healthy dog may become dehydrated simply from not drinking
              enough on a warm day. Some dogs, however, have conditions that may
              lead to chronic dehydration. In these cases, signs of dehydration
              in dogs include loss of appetite, vomiting and diarrhea, as well
              as urinating frequently and in large volumes.
            </sapn>
          </div>
          <div className="socialMediaLeftChildCont">
            <img className="socialMediaImg" src={img2} alt=""></img>
            <span className="socialMediaTitle">Syptoms of weak liver</span>
            <sapn className="socialMediaPara">
              Does your pet have a weak liver and maybe facing symptoms like
              sleepiness, increased fatigue, abdominal discomfort and loss of
              appetite? Well, if these are the major symptoms you can see then
              your pet's liver health maybe going down.
            </sapn>
          </div>
          <div className="socialMediaLeftChildCont">
            <img className="socialMediaImg" src={img3} alt=""></img>
            <span className="socialMediaTitle">Ways to treat diarrhea </span>
            <sapn className="socialMediaPara">
              Diarrhea is not a disease but rather a sign of many different
              diseases. Diarrhea associated with minor conditions can often be
              resolved quickly with simple treatments. Let's discuss the three
              ways to treat your pet's diarrhea at home:- 1. Hydration - Water
              is essential for your dog's health. They lose water naturally all
              day through their paws and excretion, especially if they've
              diarrhea. So keep your pet hydrated with water and other different
              nutritional fluids like bone broth, curd, coconut water etc. 2.
              Rest - Proper rest is important for your dog as if they get proper
              rest then their recovery rate is increased and dog will be fit and
              fine in just 2-3 days 3. Fasting - Don't feed your pet for 12
              hours to give some breathing time to your dog's gastrointestinal
              (GI) tract. Chances are, your pet may have eaten something
              unsuitable for them, hence, resting the GI tract by withholding
              food for a short period of time allows the intestines to heal
              because it isn't busy digesting food
            </sapn>
          </div>
          <div className="socialMediaLeftChildCont">
            <img className="socialMediaImg" src={img4} alt=""></img>
            <span className="socialMediaTitle">
              When your dog feel dehydrated
            </span>
            <sapn className="socialMediaPara">
              A healthy dog may become dehydrated simply from not drinking
              enough on a warm day. Some dogs, however, have conditions that may
              lead to chronic dehydration. In these cases, signs of dehydration
              in dogs include loss of appetite, vomiting and diarrhea, as well
              as urinating frequently and in large volumes.
            </sapn>
          </div>
          <div className="socialMediaLeftChildCont">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={img5} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={img6} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={img7} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={img8} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={img9} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={img10} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <span className="socialMediaTitle">
              When your dog feel dehydrated
            </span>
            <sapn className="socialMediaPara">
              A healthy dog may become dehydrated simply from not drinking
              enough on a warm day. Some dogs, however, have conditions that may
              lead to chronic dehydration. In these cases, signs of dehydration
              in dogs include loss of appetite, vomiting and diarrhea, as well
              as urinating frequently and in large volumes.
            </sapn>
          </div>
          <div className="socialMediaLeftChildCont">
            <video
              className="socialMediaVid"
              src={vid2}
              alt=""
              controls
            ></video>
            <span className="socialMediaTitle">
              When your dog feel dehydrated
            </span>
            <sapn className="socialMediaPara">
              A healthy dog may become dehydrated simply from not drinking
              enough on a warm day. Some dogs, however, have conditions that may
              lead to chronic dehydration. In these cases, signs of dehydration
              in dogs include loss of appetite, vomiting and diarrhea, as well
              as urinating frequently and in large volumes.
            </sapn>
          </div>
        </div>
        <div className="socialMediaRight">
          <div className="socialMediaRightChildCont">
            <span className="socialMediaTitle">Recent Posts</span>
              <ul className="socialMediaList">
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
              </ul>
          </div>
          <div className="socialMediaRightChildCont">
            <span className="socialMediaTitle">Recent Comments</span>
              <ul className="socialMediaList">
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
              </ul>
          </div>
          <div className="socialMediaRightChildCont">
            <span className="socialMediaTitle">Latest Updates</span>
              <ul className="socialMediaList">
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
              </ul>
          </div>
          <div className="socialMediaRightChildCont">
            <span className="socialMediaTitle">Tags</span>
              <ul className="socialMediaList">
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
              </ul>
          </div>
          <div className="socialMediaRightChildCont">
            <span className="socialMediaTitle">Categories</span>
              <ul className="socialMediaList">
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
                <li className="socialMediaListItems">Lorem ipsum</li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default SocialMedia;
