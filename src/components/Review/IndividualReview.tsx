import React from 'react';
import { Review } from '../types';

interface IndividualReviewProps {
  review: Review;
  onBack: () => void;
}

const IndividualReview: React.FC<IndividualReviewProps> = ({ review, onBack }) => {
  return (
    <div>
      <button onClick={onBack}>Back to Reviews</button>
      <div className="individual-review">
        <h3>{review.name}</h3>
        <span>{new Date(review.date).toLocaleDateString()}</span>
        <div>
          <span className='rateing'>Rating: {review.rating} / 5</span>
        </div>
        <p>{review.comment}</p>
      </div>
    </div>
  );
};

export default IndividualReview;
