import React, { useRef, useEffect, useState } from 'react';
import '../style/mission.css';
import Typewriter from "typewriter-effect";

function Mission() {
  const missionRef = useRef(null);
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

    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => {
      if (missionRef.current) {
        observer.unobserve(missionRef.current);
      }
    };
  }, []);

  return (
    <div className={`missionMain container`}>
      <div ref={missionRef} className={`container `}>
      <div className=''>
          <div className='aboutUsTextDiv'>
          <h1 className='aboutHeading'>
          <span>OUR MISSION</span>
        </h1>
        <p>
          We serve residential and commercial clients and offer various money-saving solutions. We combine our use of
          the highest quality parts and equipment and our dedication to delivering exceptional work to provide
          satisfactory service. To gain the highest customer satisfaction standards by maintaining quality, dedication,
          and transparency throughout the project.
        </p>
          </div>
          {/* <div className='aboutUsImage'>
            <img src='/images/OurMission.png' width={"100%"} height={"100%"}/>
          </div> */}
        </div>
        
      </div>
    </div>
  );
}

export default Mission;
