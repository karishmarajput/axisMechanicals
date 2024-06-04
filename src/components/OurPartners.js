import React, { useEffect, useRef, useState } from "react";

import '../style/ourPartner.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurPartner() {
  const [isVisible, setIsVisible] = useState(false);
  const ourPartnerRef = useRef(null);

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

    if (ourPartnerRef.current) {
      observer.observe(ourPartnerRef.current);
    }

    return () => {
      if (ourPartnerRef.current) {
        observer.unobserve(ourPartnerRef.current);
      }
    };
  }, []);

 
 
  return (
    <div ref={ourPartnerRef} className={`ourPartnerMain ${isVisible ? 'animated fadeIn' : ''}`}>
      <h1><span>
      OUR PARTNERS</span> </h1>
      <div className="container">
       <img src={'/images/Partners.png'} width={'100%'} height={'auto'}/>
          
      </div>
    </div>
  );
}

export default OurPartner;
