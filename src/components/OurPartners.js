import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import '../style/ourPartner.css'; // Add your CSS file for OurPartner
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typewriter from "typewriter-effect";
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

  const ourPartner = [
    {
      img:'/images/ourPartners/1.webp',
    },
    {
      img:'/images/ourPartners/2.webp',
    },
    {
      img:'/images/ourPartners/3.webp',
    },
    {
      img:'/images/ourPartners/4.webp',
    },
    {
      img:'/images/ourPartners/5.webp',
    },
  ];
 
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div ref={ourPartnerRef} className={`ourPartnerMain ${isVisible ? 'animated fadeIn' : ''}`}>
      <h1><span>
      OUR PARTNERS</span> </h1>
      <div className="slider-container container">
       
          {ourPartner.map((img, index) => (
            <div key={index} className="imageDivPartner">
              <img src={img.img} alt={`Partner ${index + 1}`}  />
            </div>
          ))}
      
      </div>
    </div>
  );
}

export default OurPartner;
