import React from 'react';
import "./Contact.css";
import { FaInstagramSquare, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

function Contact() {

  return (

    <div id="contact">
    <div className='contact'>
      <div className='contact-card'>

        <div className='contact-us'>
        <div className='contact-text'>
          <h3>Contact Us</h3>
          <span>Technopole 10 3960 Sierre</span><br />
          <span>+41 1234567890</span><br />
          <span>info@Switzcamp.com</span>
        </div>
        </div>

        <div className='follow-us'>
        <div className='follow-text'>
          <h3>Follow Us</h3>
          <p>
          <span><FaInstagramSquare /></span>
          <span><FaTwitterSquare /></span>
          <span><FaFacebookSquare /></span>
          </p>
        </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Contact