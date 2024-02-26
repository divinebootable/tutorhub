import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import How from "../../components/how/How";
// import Slide from "../../components/slide/Slide";
// import CatCard from "../../components/catCard/CatCard";
// import ProjectCard from "../../components/projectCard/ProjectCard";
// import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <div className="features">
        <div className="container">
          <div className="item">
            <h2>A whole world of talent at your fingertips</h2>
            <div className="Title">
              <img src="./img/check.png" alt="" />
              The best for very budget
            </div>
            <p> Find high-quality tutors at the best hourly rates.</p>
            <div className="Title">
              <img src="./img/check.png" alt="" />
              The best for very budget
            </div>
            <p> Find high-quality tutors at the best hourly rates.</p>
            <div className="Title">
              <img src="./img/check.png" alt="" />
              The best for very budget
            </div>
            <p> Find high-quality tutors at the best hourly rates.</p>
          </div>
          <div className="item">
            <video src="" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              Tutor Hub
              {/* <i>business</i> */}
            </h1>
            <h1>Find the right tutor for you</h1>
            <p>Lessons you will enjoy.</p>
            <div className="Title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="Title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="Title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Barah Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="How">
        <h1>How Tutor Hub works</h1>
        <div className="container">
          <div className="cards">
            <How
              title="Find Tutor"
              description="This is the decription for card 1"
              image="https://via.placeholder/com/300"
            />
            <How
              title="Book Lesson"
              description="This is the decription for card 1"
              image="https://via.placeholder/com/300"
            />
            <How
              title="Start Learning"
              description="This is the decription for card 1"
              image="https://via.placeholder/com/300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
