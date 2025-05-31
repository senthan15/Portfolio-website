import React from 'react'
import "../index.css"
import profile from "../assets/profile-img.jpg"
import contact from "../assets/mail.png"
import down from "../assets/download.png"

function Hero() {
  return (
    <>
    <div id="home" className='hero'>
      <div className='hero-text'>
        <p className='hero-text-1'>Hi,I'm<span className="high-name ">Peter Deverex</span></p>
        <p className='hero-text-2'>Full Stack Developer</p>
        <p className='hero-text-3'>I build responsive, high-performance  
                                   web applications using the latest technologies. <br className='hidden md:block'/>
                                   From sleek UIs to robust backends —
            I turn ideas into scalable, real-world solutions.</p>
      <div className='btn'>
          <a href='#contact' className="btn-icon" ><img src={contact} alt="contact"  className='icon-img'/>Contact me</a>
          <a href='#' className="btn-icon"><img src={down} alt="download"  className='icon-img'/>Download CV</a>
        </div>
        

      </div>
      <div className='hero-img'>
        <img src={profile} alt="profile" />
      </div>
    </div>
    
    </>
  )
}

export default Hero