import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetails from './components/ServiceDetails';
import Services from './pages/Services';
import Project from './pages/Project';
import ContactUs from './pages/ContactUs';
import JoinUs from './pages/JoinUs';
function App() {
  const services = [
    {
      serviceId: '1',
      serviceName: 'PLUMBING',
      short:'Professional Plumbing Services – Get Bespoke Solutions at Best Prices',
      photo: '/images/services/1.webp',
      details: 'Whether you want quick and efficient faucet installation or full-service sewer line replacement, Axis Mechanical Ltd. is a name you can trust for best-in-class residential and commercial plumbing services. We have years of industry experience, offering professional and reliable plumbing services tailored to meet your unique needs. From fixing leaky faucets to hot water tank installation and repair, we specialize in all. Keeping in mind unique needs of our residential and commercial clients, we offer a wide spectrum of individualized plumbing services as mentioned herewith:',
      points:['New construction','Tenant improvement','Service']
    },
    {
      serviceId: '2',
      serviceName: 'HEATING',
      short:'Professional Heating System Installation, Repair, and Maintenance at Your Doorstep',
      photo: '/images/services/2.webp',
      details: 'As winter is knocking the doors, it is time to ensure your heating system is working properly to keep the chill out and render warmth inside. And if you do not have one yet, get high-quality heating system installed right away.',
      points:['Furnace Installation','Furnace Service','Boiler Installation','Boiler Service']
    },
    {
      serviceId: '3',
      serviceName: 'GASFITTING',
      short:'Trust Axis Mechanical for Safe and Reliable Gas Fitting Installation',
      photo: '/images/services/3.webp',
      details: 'For many years, we have been proudly offering expert and reliable gas fitting services to residential and commercial clients in the Lower Mainland, Metro Vancouver, and Fraser Valley region. We are fully licensed, insured and bonded, and can properly install any type of gas appliances and systems. Our technicians also provide comprehensive maintenance solutions to ensure optimal functioning of the gas system as well as provide 24/7 emergency repair services in case of gas leakage or other malfunctioning.',
      points:['New Installation','Repair and Maintenance']
    },
    {
      serviceId: '4',
      serviceName: 'HVAC',
      short:'Professional HVAC Installation, Repairs and Maintenance at Your Doorstep',
      photo: '/images/services/4.webp',
      details: 'Summer in Lower Mainland and Metro Vancouver Area can be uncomfortable, hot, and humid. To beat the heat, it is important to ensure that your HVAC system is functioning properly. Axis Mechanical Ltd. is a leading choice for high-quality, reliable, and professional air conditioning installations, maintenance and repairs. We have over two decades of experience installing, repairing and servicing all kinds of air conditioners and HVAC systems, ensuring complete peace of mind. Our service contracts and maintenance plans are tailor-made for outdoor and indoor systems, including air conditioning units, ventilation, gas furnaces, heat pumps, and fan coils.',
      points:['Air conditioner installation','Furnace Service','Air Conditioner Service and Repairs','HRV systems','Ventilation']
    },
    {
      serviceId: '5',
      serviceName: 'BACK FLOW TESTING',
      short:'Certified and Professional Back flow Testing, Installation and Repair Services You Can Trust',
      photo: '/images/services/5.webp',
      details: 'Having lots of industry experience, we provide professional back flow testing, installation, and repair services to residential and commercial clients in Metro Vancouver. We are committed to keeping your drinking water safe and thus, provide expert consultation to educate you and how to minimize the risks of contaminating public or private water supply. Our technicians are certified back flow testers and approved to inspect, test, install, and repair all kinds of back flow preventers and devices. <br/> We are a trusted choice for back flow testing, installation and repair, offering a wide spectrum of services that encompass:',
      points:['Testing','New Installation','Repairs & Maintenance']
    },
  ];
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="services" element={<Services services={services} />} />
          <Route path='services/:serviceId' element={ <ServiceDetails services={services} />}/>
          
          <Route path="project" element={<Project />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="join-us" element={<JoinUs />} />
          {/* <Route path="*" element={<NoPage />} />  */}
        </Route>
      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
