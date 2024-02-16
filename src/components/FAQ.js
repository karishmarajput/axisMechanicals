// FAQ.js

import React, { useState } from 'react';
import '../style/faq.css'; // Import the CSS file

const questions = [
    {
      question: 'How much does it cost for a consultation?',
      answer: 'We can offer you a free quote based on a remote interview, or we charge our basic to visit the site , in most cases your problem is fixed on spot!'
    },
    {
      question: 'Do You Offer a warranty on your work?',
      answer: 'We stand by our services 100%, and we provide warranty on our services free of charge. '
    },
    {
        question: 'Do I need to get permits or is that covered under the repair/work costs?',
        answer: 'Any permits or inspections needed to complete the job are covered in our fees and handled accordingly. For Regular maintenance and repairs a permit is usually not required.'
      },
  ];
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='faqMain'>
        <div className='container'>
        <h1><span>FREQUENTLY ASKED QUESTIONS </span> </h1>
        <h5>Please contact us if you cannot find an answer to your question.</h5>
                <div className="faq-container container">
            {questions.map((question, index) => (
                <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                <div className="question" onClick={() => toggleQuestion(index)}>
                    <span>{question.question}</span>
                    <span>{activeIndex === index ? '-' : '+'}</span>
                </div>
                <div className="answer">{question.answer}</div>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default FAQ;
