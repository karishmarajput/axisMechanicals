import React from 'react';
import '../style/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook,FaLinkedin,FaInstagramSquare,FaWhatsapp } from "react-icons/fa";

function Footer(){
    return(
        <div>
       
        <div className="footerMain">
            <div className="container footerDiv">
                <div className="container footerInsideDiv">
                    <h1><span>INFORMATION</span></h1>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/project">Projects</a></li>
                        <li><a href="/services">Service</a></li>
                        {/* <li><a href="#aboutUs">About Us</a></li> */}
                        <li><a href="/contact-us">Contact Us</a></li>
                        <li><a href="/join-us">Join Us</a></li>
                    </ul>
                </div>
                <div className="container footerInsideDiv footer-links">
                    <h1 className="axisMechanics"><span>AXIS MECHANICAL OFFICE</span></h1>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Surrey, British Columbia, Canada</p>
                    <p><FontAwesomeIcon icon={faPhone} /> +1(604) 773-0957</p>
                    <p><FontAwesomeIcon icon={faEnvelope} />  <a href="mailto:Info@axismechanical.ca">Info@axismechanical.ca</a></p>
                    <p><FontAwesomeIcon icon={faClock} /> Mon-Fri 9am-5pm</p>
                </div>
                <div className="container  footerInsideDiv footer-links">
                    <h1><span>FIND US</span></h1>
                    <div className='findUs'>
                        <a href='https://www.facebook.com/axismechanical.ca' target="_blank"><FaFacebook/></a>
                        <a href='https://www.linkedin.com/company/axis-mechanical/'  target="_blank"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/axismechanical_" target="_blank"><FaInstagramSquare/></a>
                    </div>
                    <div className='chatWithUs'>
                    <a href="https://api.whatsapp.com/send/?phone=16047730049&text&type=phone_number&app_absent=0" target="_blank">
                        <div className='chatWithUsBtn'>
                           Chat with us <FaWhatsapp/> 
                        </div>
                        </a>

                    </div>
                    
                </div>
            </div>
            
        </div>
        <div className='copyright'>
                <p>COPYRIGHT © 2023 AXIS MECHANICAL - ALL RIGHTS RESERVED.</p>
            </div> 
        </div>
    )
}

export default Footer;
