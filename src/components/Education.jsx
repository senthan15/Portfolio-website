import React from 'react'
import "../index.css"
import college from "../assets/college.png"
 import school from "../assets/school.png"


function Education() {
  return (
    <div  id='education' className='edu'>
        <h3 className="head">Education</h3>
        <div className='card'>
           <div className='college card-style'>
            <div className='edu-text1'>
                <img src={college} alt="" className="edu-icon" />
                <h3>Trinity Institute of Engineering </h3>
            </div>
            <div className='edu-text2'>
                 <h5>Computer Science and Engineering</h5>
                 <p>Chennai, Tamilnadu</p>
                 <p>CGPA-9.17</p>
            </div>
            </div>
            <div className='school card-style'>
            <div className='edu-text1'>
                <img src={school} alt="" className="edu-icon" />
                <h3 >Greenwood International School </h3>
            </div>
            <div className='edu-text2'>
              <h5>Higher Secondary Education</h5>
             <p>Thalaivasal, Salem</p>
             <p>HSE:92% | SSLC:83%</p>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default Education