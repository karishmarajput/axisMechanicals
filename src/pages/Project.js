import React, { useState } from 'react';
import '../style/project.css'; // Import the CSS file
import Navigation from '../components/Navbar';
import Footer from '../components/Footer';
import Typewriter from "typewriter-effect";

const projects = [
  
    {
      "name": "Fairfeild Marriot Hotel Chilliwack",
      "category": "COMMERCIAL"
    },
    {
      "name": "Tokyo Commsionary Kitchen Surrey",
      "category": "TENANT IMPROVEMENTS"
    },
    {
      "name": "Ravir Apartments Coquitlam",
      "category": "COMMERCIAL"
    },
    {
      "name": "Ravir Apartments Coquitlam",
      "category": "COMMERCIAL"
    },
    {
      "name": "Rail Distt 5 (Apartments) Abbotsford",
      "category": "COMMERCIAL"
    },
    {
      "name": "Sophia Living (Port Moody)",
      "category": "COMMERCIAL"
    },
    {
      "name": "West Coast Showroom Plaza (13210ComberWay)",
      "category": "COMMERCIAL"
    },
    {
      "name": "BC Tree Seed Extention Surrey",
      "category": "COMMERCIAL"
    },
    {
      "name": "Strawberry Hill Community Center (Surrey)",
       "category": "COMMERCIAL"
    },
  
];

const categories = ['ALL', 'COMMERCIAL','TENANT IMPROVEMENTS','RESIDENTIAL']; // Add other categories as needed

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'ALL' ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <div>
      <Navigation />
      <div className='projectMain '>
        <div className="serviceImgContainer projectsBg">
          <h1><span>OUR PROJECTS </span></h1>
        </div>
        
        <div className="category-filter">
          {categories.map(category => (
            <button 
              key={category} 
              onClick={() => handleCategoryChange(category)}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className='projectMain project-container animated fadeIn'>
          {filteredProjects.map((project, index) => (
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
