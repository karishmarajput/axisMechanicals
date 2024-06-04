import Navigation from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/services.css';
import Typewriter from "typewriter-effect";

function Services({ services }) {
  return (
    <div className="servicePage">
      <Navigation />
      <div className="services">
        <div className="serviceImgContainer">
        <h1><span>
        OUR SERVICES </span></h1>
        </div>
       
        <div className="services-container container">
        <div className="HomeServicesContainer serviceContainer">


        <a className="details-link" href="/services/1">
        <div className='service'>
                <img src="/images/HomeServices/plumbing.png" width={'100px'} height={'100px'}></img> 
                <h1>PLUMBING</h1>
                <p>Professional and Trusted Solutions for all<br/>  your New Construction Needs</p>
                </div>
        </a>
          <a className="details-link" href="/services/2">
          <div className='service'>
          <img src="/images/HomeServices/heating.png" width={'100px'} height={'100px'}className="imgStyleService"></img> 
          <h1>HEATING</h1>
            <p >Professional Heating System Installation, Repair, <br/>and Maintenance at Your Doorstep</p>
            </div>
          </a>


<a className="details-link" href="/services/3">
<div className='service'>
        <img src="/images/HomeServices/gasFitting.png" width={'100px'} height={'100px'}></img> <h1>GAS FITTING</h1>
        <p>Trust Axis Mechanical for Safe and Reliable <br/>Gas Fitting Installation</p>
        </div>
</a>
{/* <a className="details-link" href="/services/4">
<div className='service'>
        <img src="/images/HomeServices/hvac.png" width={'100px'} height={'100px'}></img> 
        <h1>HVAC</h1>
        <p>Professional HVAC Installation, Repairs <br/>and Maintenance at Your Doorstep</p>
        </div>
</a> */}


       </div>
       
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
