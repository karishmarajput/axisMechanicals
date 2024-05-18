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
          Axis Mechanical Ltd - your trusted source for top-grade plumbing, heating, and gas fitting solutions. With over a decade of industry expertise, we specialize in new construction projects (commercial, multi-residential, custom homes) and tenant improvements (office space, retail, restaurants).
</p><p>
Our skilled team is equipped with industry know-how and cutting-edge technology to handle your project from start to finish. Count on us for reliable, affordable solutions that set the standard in the Lower Mainland and Fraser Valley. Get in touch today!
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
