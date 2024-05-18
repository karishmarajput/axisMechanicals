import React from 'react';
import '../style/project.css'; // Import the CSS file
import Navigation from '../components/Navbar';
import Footer from '../components/Footer';
import Typewriter from "typewriter-effect";

const projects = [
  {
    projectImage: '/images/projects/12787_78Ave.png',
    name: '12787_78Ave',
    location:'abc',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1,500s,',
    category:'COMMERCIAL'
  },
  {
    projectImage: '/images/projects/13190-58a-Ave.png',
    name: '13190-58a-Ave',
    location:'abc',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1,500s,',
    category:'COMMERCIAL'
  },  
  {
    projectImage: 'images/projects/13210ComberWay.png',
    name: '13210ComberWay',
    location:'abc',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1,500s,',
    category:'COMMERCIAL'
  },
  {
    projectImage: '/images/projects/BcCannabisStores.png',
    name: 'BcCannabisStores',
    location:'abc',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1,500s,',
    category:'COMMERCIAL'
  },
  {
    projectImage: '/images/projects/BcLiquorStores.png',
    name: 'BcLiquorStores',
    location:'abc',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1,500s,',
    category:'COMMERCIAL'
  },

];

const Project = () => {
  return (
    <div>
      <Navigation />
      <div className='projectMain '>
      <div className="serviceImgContainer projectsBg">
        <h1><span>
        OUR PROJECTS </span></h1>
        </div>
        <div className='projectMain project-container animated fadeIn'>
        {projects.map((project, index) => (
            <div key={index} className="project-item">
              <img src={project.projectImage} alt={project.name} className="project-image" />
              <div className='projectName'>{project.name}</div>
              <div className='projectLocation'>{project.location}</div>
              <div className='projectDescribe'>{project.description}</div>
              <div className='projectCategory'>{project.category}</div>
            </div>
          ))}
        </div>


        <div className="project-container container">
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
