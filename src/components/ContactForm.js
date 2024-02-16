import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com'; // Import the emailjs library

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ug3wx8i', 'template_l9at5s3', e.target, 'DDU9g1HdhxnTV_G26')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Clear form fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
  };

  return (
    <div className='contactForm'>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter your message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </Form.Group>

      <br/> <br/>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default ContactForm;
