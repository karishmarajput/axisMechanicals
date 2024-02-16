import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import '../style/ourPartner.css'
import Slider from "react-slick";

function OurPartner() {
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
  ]
 
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
    <div className="ourPartnerMain ">

<h1><span>OUR PARTNERS</span> </h1>
    <div className="slider-container container">
      <Slider {...settings}>
      {ourPartner.map((img, index) => (
            <div key={index}  className="imageDivPartner">
              <img src={img.img}/>
            </div>
          ))}
      </Slider>
    </div>
    </div>
  );
}

export default OurPartner;
