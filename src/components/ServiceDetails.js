import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from "../components/Navbar"
import Footer from "../components/Footer"
const ServiceDetails = ({ services }) => {
  const { serviceId } = useParams();
  const service = services.find(service => service.serviceId === serviceId);

  if (!service) {
    return <div>Service not found!</div>;
  }

  return (
    <div>
      <Navigation/>
      <div className="services service-details-container">
        <h2 className="service-name"><span>{service.serviceName}</span></h2>
        <img src={service.photo} alt={service.serviceName} className="service-image" />
        <p className="service-detailss">{service.details}</p>
        <ul className="service-points">
          {service.points.map((point, index) => (
            <li key={index} className="point-item">{point}</li>
          ))}
        </ul>
      </div>
      <Footer/>
    </div>
  );
}

export default ServiceDetails;
