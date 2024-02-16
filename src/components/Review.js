// Review.js

import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../style/review.css';

const Review = ({ comment, stars, photo, author, date, link }) => {
  const renderStars = () => {
    const filledStars = [];
    const emptyStars = [];

    for (let i = 0; i < stars; i++) {
      filledStars.push(<FaStar key={i} className="star" />);
    }

    for (let i = 0; i < 5 - stars; i++) {
      emptyStars.push(<FaStar key={stars + i} className="star empty" />);
    }

    return [...filledStars, ...emptyStars];
  };

  return (
    <div className="review-container">
      <div className="review">
        <div className="photo">
          <img src={photo} alt="Customer" />
        </div>
        <div className="review-details"><br/>
          <div className="stars">{renderStars()}</div><br/>
          <p className="comment">{comment}</p>
          {link && <a href={link} className="link">Read more</a>}
          <br/><br/>
          <p className="author">{author},  {date}</p>
          
          
        </div>
      </div>
    </div>
  );
};

export default Review;
