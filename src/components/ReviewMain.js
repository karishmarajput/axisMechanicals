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

    if (reviewMainRef.current) {
      observer.observe(reviewMainRef.current);
    }

    return () => {
      if (reviewMainRef.current) {
        observer.unobserve(reviewMainRef.current);
      }
    };
  }, []);

  const reviews = [
    { 
      stars: 5, 
      comment: '"Exceptional performance and service. Appreciate response and..."', 
      photo: "/images/reviews/1.png", 
      author: "Pankaj Sharma", 
      date: "12/28/2023", 
      link: "https://maps.app.goo.gl/8Fj4Go6C6MGPsteN6" 
    },
    { 
      stars: 5, 
      comment: '"Jas & the team guys are very good. Always on time & did the work in..."', 
      photo: "/images/reviews/2.png", 
      author: "Puneet Uppal ", 
      date: "3/25/2023", 
      link: "https://maps.app.goo.gl/EtHhAtEdebcax6kF9" 
    },
    { 
      stars: 5, 
      comment: '"I’ve used Axis as my mechanical contractor for both residential an..."', 
      photo: "/images/reviews/3.png", 
      author: "Will Gibson", 
      date: " 3/15/2023", 
      link: "https://maps.app.goo.gl/qLi1McNZecUVN3nN8" 
    },
    { 
      stars: 5, 
      comment: '"Good quality, great service and professional service. One call aw..."', 
      photo:"/images/reviews/4.png", 
      author: "JEET SINGH PAMMA ", 
      date: "3/14/2023", 
      link: "https://maps.app.goo.gl/5V8FbRLJJDVaVZeU7" 
    },
    { 
      stars: 5, 
      comment: '"We just done building our house and plumbing service has been d..."', 
      photo:"/images/reviews/5.png", 
      author: "Sandeep pamma ", 
      date: "3/14/2023", 
      link: "https://maps.app.goo.gl/kHTuKd2jwgQYhADQ8" 
    },
    { 
      stars: 5, 
      comment: '"I hired Axis Mechanical to do complete plumbing, Gas and HVA..."', 
      photo: "/images/reviews/6.png", 
      author: "Bakshpreet Singh Gill", 
      date: "3/14/2023", 
      link: "https://maps.app.goo.gl/Gu2mfL5yRD5pcH7X7" 
    },
    { 
      stars: 5, 
      comment: '"Jas is very professional and takes full responsibility for the work. W..."', 
      photo:"/images/reviews/7.png", 
      author: "Sukhman Gill", 
      date: "3/14/2023", 
      link: "https://maps.app.goo.gl/srmkGN1BLCJkjqL8A" 
    },
    { 
      stars: 5, 
      comment: '"They are very responsive and professional. Among several diffe..."', 
      photo: "/images/reviews/8.png", 
      author: "manreet dhillon ", 
      date: " 3/14/2023", 
      link: "https://maps.app.goo.gl/wsUuT9YTDo1GQB698" 
    },
    { 
      stars: 5, 
      comment: '"Axis mechanical is so professional in what they do. I had an amazin..."', 
      photo: "/images/reviews/9.png",  
      author: "Sunpreet Dhillon", 
      date: " 8/11/2022", 
      link: "https://maps.app.goo.gl/8NRNEftQdF2pnktq9" 
    }
  ];

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
    <div ref={reviewMainRef} className={` ${isVisible ? 'animated fadeIn' : ''}`}>
      <h1><span>
      <Typewriter
              options={{
                strings: ['OUR REVIEWS'],
                autoStart: true,
                loop: true,
              }}
            /></span> </h1>
      <div className="slider-container container">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index}>
              <Review stars={review.stars} comment={review.comment} photo={review.photo} author={review.author} date={review.date} link={review.link} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
}

export default ReviewMain;
