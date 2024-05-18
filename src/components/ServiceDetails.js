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
      <div className="serviceDetailMain">
      <div className='serviceDetailsImgContainer' style={{backgroundImage: `url('${service.photo}')`}}>
          <div className='serviceMainText'>
            <h1>
              <span>
                OUR SERVICES: {service.serviceName}
              </span>
            </h1>
          </div>
        </div>
        <div className=' services service-details-container container'>
            <p className='service-details'>
              {service.details}
            </p>
            <div className='service-points'>
            {service.points.map((point, index) => (
            <div key={index} className="point-item">
              <div className='point-box'>
                {point}</div>
                </div>
          ))}
            </div>
        </div>
        </div>
      <Footer/>
    </div>
  );
}

export default ServiceDetails;
