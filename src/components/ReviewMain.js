import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Review from "./Review";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/review.css'; 
import Typewriter from "typewriter-effect";
function ReviewMain() {
  const [isVisible, setIsVisible] = useState(false);
  const reviewMainRef = useRef(null);

  const projects = [
    {
      projectImage: '/images/projects/12787_78Ave.png',
    
    },
    {
      projectImage: '/images/projects/13190-58a-Ave.png',
      
    },  
    {
      projectImage: 'images/projects/13210ComberWay.png',
      
    },
    {
      projectImage: '/images/projects/BcCannabisStores.png',
    
    },
    {
      projectImage: '/images/projects/BcLiquorStores.png',
     
    },
  ];

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };

  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="reviewMain">
    <div >
      <div className="slider-container container">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index}>
                <img src={project.projectImage} className="slider-image project-image" />
            
            </div>
          ))}

        </Slider>
      </div>
    </div>
    </div>
  );
}

export default ReviewMain;
