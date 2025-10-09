import React from "react";
import "./section1.css";
import negr from "../assets/negr.png";
const Section1 = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="section_1">
            <div className="section_text">
              <h1 className="h1">
                <span className="span">Studying</span> Online is now much easier
              </h1>
              <p className="p">
                Skilline is an interesting platform that will teach you in more
                an interactive way
              </p>
              <button className="btnn">Join for free</button>
              <button className="watch">Watch how it works</button>
            </div>
            <img style={{marginTop: "10px"}} width={400} src={negr} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
