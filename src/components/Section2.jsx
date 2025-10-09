import './section2.css'
import google from '../assets/google.png'
import React from 'react'

const Section2 = () => {
  return (
    <div>
      <div className="container">
        <div className="trusted">
          <h5 className='h5'>Trusted by 5,000+ Companies Worldwide</h5>
          <img style={{marginTop: "20px", marginLeft: "100px", marginBottom: "20px"}} width={1000} src={google} alt="" />
        </div>

        <div className="cards_2">
          <h1 className='hh1'>What is <span className='span'>Skilline?</span></h1>
          <p className='pp'>Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
        </div>
      </div>
    </div>
  )
}

export default Section2;
