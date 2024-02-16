import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import '../style/applyNowForm.css'

const ApplyNow = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [cvLink, setCVLink] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
  
    try {
      const templateParams = {
        name: name,
        phone: phone,
        email: email,
        message: message,
        cvLink: cvLink
      };
  
      await emailjs.send('service_ug3wx8i', 'template_rgawwoq', templateParams, 'DDU9g1HdhxnTV_G26');
  
      setSubmitted(true);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setCVLink('');
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
<div className='container p-2 applyNowForm '>
<Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        
        <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formPhone">
        
        <Form.Control type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formEmail">
      
        <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formMessage">
        
        <Form.Control as="textarea" rows={3} placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formCVLink">
        
        <Form.Control type="link" placeholder="Enter the link to your CV" value={cvLink} onChange={(e) => setCVLink(e.target.value)} required />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit'}
      </Button>

      {submitted && <div>Application submitted successfully!</div>}
    </Form>
</div>
  );
};

export default ApplyNow;
