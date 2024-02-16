import Navigation from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/services.css'
function Services(services){
    return(
        <div className="servicePage">
            <Navigation></Navigation>
            
            <div className="services container">
            <h1><span>OUR SERVICES</span> </h1>
                <div className="services-container container">
                    
                    {services.services.map(service => (
                           
                      
                         <div key={service.serviceId} className="service-card">
                        <Card style={{ width: '16rem',minHeight:'22rem' }}>
                        <Card.Img variant="top" src={service.photo} />
                        <Card.Body>
                          <Card.Title>{service.serviceName}</Card.Title>
                          <Card.Text>{service.short}
                            </Card.Text>
                          <Button className="btnService"> <Link to={`/services/${service.serviceId}`} className="details-link">View Details</Link></Button>
                        </Card.Body>
                      </Card>
                         </div>
                    ))}
                    </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Services