import React from 'react';
import { Review } from '../types';

interface ReviewListProps {
  reviews: Review[];
  onReviewClick: (review: Review) => void;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, onReviewClick }) => {
  return (
    <div className='review-list'>
      {reviews.map((review) => (
        <div key={review.id} className="review" onClick={() => onReviewClick(review)}>
          <div className="review-header">
            <h4>{review.name}</h4>
            <span>{new Date(review.date).toLocaleDateString()}</span>
          </div>
          <div>
            <span className='review-rating'>Rating: {review.rating} / 5</span>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
