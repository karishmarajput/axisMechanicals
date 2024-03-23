import React from 'react';
import '../style/project.css'; // Import the CSS file
import Navigation from '../components/Navbar';
import Footer from '../components/Footer';
import Typewriter from "typewriter-effect";

const projects = [
  {
    projectImage: '/images/projects/2.webp',
    name: 'COMMERCIAL'
  },
  {
    projectImage: '/images/projects/4.webp',
    name: 'TENANT IMPROVEMENTS'
  },
  {
    projectImage: '/images/projects/3.webp',
    name: 'MULTI RESIDENTIALS'
  },
  {
    projectImage: '/images/projects/1.webp',
    name: 'CUSTOM RESIDENTIAL'
  }
];

const Project = () => {
  return (
    <div>
      <Navigation />
      <div className='projectMain container'>
        <h1><span>
        <Typewriter
              options={{
                strings: ['OUR PROJECTS'],
                autoStart: true,
                loop: true,
              }}
            /> </span></h1>
        <div className="project-container container">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <img src={project.projectImage} alt={project.name} className="project-image" />
              <div className="project-overlay">
                <span className="project-name">{project.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
