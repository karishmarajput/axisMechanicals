import React, { useState,useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Partner = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    // Function to handle smooth scrolling to the "partnership" div
    const scrollToPartnership = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const scrollTo = urlParams.get('scrollTo');

      if (scrollTo === 'partnership') {
        const partnershipDiv = document.getElementById('partnership');
        if (partnershipDiv) {
          partnershipDiv.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Call the function on component mount
    scrollToPartnership();
  }, []); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const templateParams = {
        name: name,
        email: email,
        phone: phone,
        message: message,
        partnership:'partnership'
      };

      await emailjs.send('service_ug3wx8i', 'template_l9at5s3', templateParams, 'DDU9g1HdhxnTV_G26');

      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="partnerMain" id="partnership">
      <h1><span>PARTNERSHIP</span></h1>
      <div className="partnerDiv ">
        <div className="partnerInstruction">
          <p>Fill out the form below to get started with partnership:</p>
        </div>
        <div className="partnerForm applyNowForm">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Control type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Control as="textarea" rows={3} placeholder="How we can help you?" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit'}
            </Button>

            {submitted && <div>Thank you for your submission!</div>}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Partner;
