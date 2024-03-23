import Navigation from "../components/Navbar";
import Footer from "../components/Footer";
import '../style/contactUs.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook,FaLinkedin,FaInstagramSquare,FaWhatsapp } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import Typewriter from "typewriter-effect";

function ContactUs(){
    return(
        <div>
            <Navigation/>
            <div className="contactUsDiv container">
            <h1><span>
            <Typewriter
              options={{
                strings: ['CONTACT US'],
                autoStart: true,
                loop: true,
              }}
            /></span></h1><br/>
         <div>
         <div className="contactText">
                <h4>Better yet, see us in person!</h4>
                <h5>We love our customers, Call us today to book your appointment or send us an email.</h5>
            </div>
            <div className="contactMainDiv">
                <div className="contactMap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.396691091432!2d-122.8432431!3d49.13609220000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8db63a8fa25c819d%3A0xe371662de0f23837!2sAxis%20Mechanical%20ltd!5e0!3m2!1sen!2sin!4v1707925879770!5m2!1sen!2sin!1m3!1d5!2d-122.8432431!3d49.13609220000001!1m3!1d5!2d-122.8432431!3d49.13609220000001" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>         
                </div>
                <div>
                <div className="container addressContact">
                    <div>
                    <h1 className="axisMechanicsContact"><span>AXIS MECHANICAL OFFICE</span></h1>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Surrey, British Columbia, Canada</p>
                    <p><FontAwesomeIcon icon={faPhone} /> +1(604) 773-0957</p>
                    <p><FontAwesomeIcon icon={faEnvelope} />  <a href="mailto:Info@axismechanical.ca">Info@axismechanical.ca</a></p>
                    <p><FontAwesomeIcon icon={faClock} /> Mon-Fri 9am-5pm</p>
                    </div>

                    <div >
                    <h1><span>FIND US</span></h1>
                    <div className='findUs findContact'>
                        <a href='https://www.facebook.com/axismechanical.ca' target="_blank"><FaFacebook/></a>
                        <a href='https://www.linkedin.com/company/axis-mechanical/'  target="_blank"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/axismechanical_" target="_blank"><FaInstagramSquare/></a>
                    </div>
                    <div className='chatWithUs '>
                    <a href="https://api.whatsapp.com/send/?phone=16047730049&text&type=phone_number&app_absent=0" target="_blank">
                        <div className='chatWithUsBtn contactChatBtn'>
                           Chat with us <FaWhatsapp/> 
                        </div>
                        </a>

                    </div>
                    
                </div>
                </div>
                </div>
            </div>
            
         </div>
         <div className="contactUsForm container">
         <h1><span>
         <Typewriter
              options={{
                strings: ['CONTACT FORM'],
                autoStart: true,
                loop: true,
              }}
            /></span></h1>
            <ContactForm/>
         </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactUs;
