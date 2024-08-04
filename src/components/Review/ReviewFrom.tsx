import React, { useState } from 'react';
import ReactStars from 'react-stars';
import { Review } from '../types'; 
import { v4 as uuidv4 } from 'uuid';

interface ReviewFormProps {
  onSubmit: (review: Review) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name && comment && rating) {
      const newReview: Review = {
        id: uuidv4(), // unique id generator
        name,
        comment,
        rating,
        date: new Date().toISOString(),
      };
      onSubmit(newReview);
      setName('');
      setComment('');
      setRating(0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Write a Review</h3>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Rating:</label>
        <ReactStars
          count={5}
          size={24}
          value={rating}
          onChange={setRating}
          color2={'#ffd700'}
        />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
