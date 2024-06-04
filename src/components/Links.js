import React, { useEffect, useRef, useState } from "react";


function Links() {
  const [isVisible, setIsVisible] = useState(false);
  const linksRef = useRef(null);

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

    if (linksRef.current) {
      observer.observe(linksRef.current);
    }

    return () => {
      if (linksRef.current) {
        observer.unobserve(linksRef.current);
      }
    };
  }, []);

  return (
    <div ref={linksRef} className={`linksMain container ${isVisible ? 'animated fadeIn' : ''}`}>
      <div className="makeItHappen">
        <h1>
          MAKE IT <br/>HAPPEN
        </h1>
      </div>
      <div>
        <div className='nav-links footerLinks'>
          <div>
            <a href='/contact-us'>Contact Us</a>
          </div>
          <div>
            <a href='/join-us'>Kickstart your career</a>
          </div>
          <div>
            <a href='/join-us?scrollTo=partnership'>Become Partner</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
