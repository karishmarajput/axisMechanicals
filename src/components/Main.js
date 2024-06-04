import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../style/main.css'; // Import your CSS file

function Main() {
  return (
    <div className='mainDiv'>
      <div className='mainText'>
        {/* <h3>We are an experienced company</h3> */}
        <h2>YOUR TRUSTED CONSTRUCTION PARTNER FOR</h2>
        <h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'PLUMBING',
              1000, // wait 1s before replacing "PLUMBING" with "HEATING"
              'HEATING',
              1000,
              'GAS FITTING',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h1>
        <a className='mainBtn' href="/services">Learn More</a>
      </div>
    </div>
  );
}

export default Main;
