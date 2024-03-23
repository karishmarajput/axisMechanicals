import React, { useState, useRef, useEffect } from 'react';
import '../style/faq.css';
import Typewriter from "typewriter-effect";

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
  const faqRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div ref={faqRef} className={`faqMain ${isVisible ? 'animated fadeIn' : ''}`}>
      <div className=''>
        {/* <h1><span>
        FREQUENTLY ASKED QUESTIONS</span> </h1>
        <h5>Please contact us if you cannot find an answer to your question.</h5> */}
        <div className="faq-container ">
          {questions.map((question, index) => (
            <div key={index} className={`faq-item faq-item${index} ${activeIndex === index ? 'active' : ''}`}>
              <div className="flipper">
                <div className="question" onClick={() => toggleQuestion(index)}>
                  <span>{question.question}</span>
                </div>
                <div className="answer">
                  <span>{question.answer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
