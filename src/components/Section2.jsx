import "./section2.css";
import google from "../assets/google.png";
import sinfxona from '../assets/sinfxona.jpg';
import React from "react";

const Section2 = () => {
  return (
    <div>
      <div className="container">
        <div className="trusted">
          <h5 className="h5">Trusted by 5,000+ Companies Worldwide</h5>
          <img
            style={{
              marginTop: "20px",
              marginLeft: "100px",
              marginBottom: "20px",
            }}
            width={1000}
            src={google}
            alt=""
          />
        </div>

        <div className="cards_2">
          <h1 className="hh1">
            What is <span className="span">Skilline?</span>
          </h1>
          <p className="pp">
            Skilline is a platform that allows educators to create online
            classes whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>

        <div className="cards">
          <div className="card1">
            <h2 className="for">FOR INSTRUCTOR</h2>
            <button className="start_btn">Sart a class today</button>
          </div>
          <div className="card2">
            <h2 className="for">FOR STUDENT</h2>
            <button className="enter_btn">Enter access code</button>
          </div>
        </div>

        <div className="yozish">
          <div className="textss">
            <h3 className="hh3">Everything you can do in a physical classroom, <span className="span">you can do with Skilline</span></h3>
            <p className="p">Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
            <a className="link" href="">Learn more</a>
          </div>
          <img style={{borderRadius: "20px"}} width={400} src={sinfxona} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
