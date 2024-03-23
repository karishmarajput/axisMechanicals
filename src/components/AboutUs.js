import React, { useRef, useEffect, useState } from 'react';
import '../style/aboutUs.css';

function AboutUs() {
  const aboutUsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: 0.5, // Adjust this threshold as needed
      }
    );

    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current);
    }

    return () => {
      if (aboutUsRef.current) {
        observer.unobserve(aboutUsRef.current);
      }
    };
  }, []);

  return (
    <div ref={aboutUsRef} className={`aboutUsMain ${isVisible ? 'animated fadeIn' : ''}`} id="aboutUs">
      <div className="container">
       
        <div className='aboutUsTextMainDiv'>
          <div className='aboutUsTextDiv'>
          <h1 className='aboutHeading'>
          <span>ABOUT US </span>
        </h1>
          <p>
          You have arrived at the right place if you are searching for reliable PLUMBING, HEATING, GAS FITTING & BACKFLOW TESTING SERVICES. Axis Mechanical Ltd started its journey to provide top-grade, professional and trusted plumbing and heating services. With10+ Years of experience in this industry we have been providing clients across the lower mainland & Fraser Valley. We specialize in New Construction( Commercial, Multi-residential, custom Homes) Tenant Improvements(Office Space, Retail, Restaurants) Service ( Commercial & Residential) <br />
          <br />
          Our Team is well-trained and familiar with industry specifications, and they also have familiarity with the equipment and technology. They take care of the project from start to end. We have experience dealing with all types of plumbing, heating, gas fitting, and other similar issues. Our top-notch and affordable services have helped us become the leading mechanical service provider in the lower mainland and Fraser Valley area.
        </p>
          </div>
          <div className='aboutUsImage'>
            <img src='/images/aboutUsPlumber.png' width={"100%"} height={"100%"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
