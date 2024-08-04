import React, { useState } from 'react';
import ReviewForm from './ReviewFrom';
import IndividualReview from './IndividualReview'; 
import ReviewList from './ReviewList'; 
import { Review } from '../types'; 
import './Review.css';

const ReviewSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [sortOption, setSortOption] = useState<string>('date');
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  const addReview = (newReview: Review) => {
    setReviews([...reviews, newReview]);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const rating = parseInt(event.target.value, 10);
    setFilterRating(rating === 0 ? null : rating);
  };

  const sortedFilteredReviews = reviews
    .filter(review => filterRating === null || review.rating === filterRating)
    .sort((a, b) => {
      if (sortOption === 'date') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortOption === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleReviewClick = (review: Review) => {
    setSelectedReview(review);
  };

  const handleBackToList = () => {
    setSelectedReview(null);
  };

  return (
    <div className = 'review-section'>
      <h2>Customer Reviews</h2>
      {selectedReview ? (
        <IndividualReview review={selectedReview} onBack={handleBackToList} />
      ) : (
        <>
          <div className="controls ">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" onChange={handleSortChange} value={sortOption}>
              <option value="date">Date</option>
              <option value="rating">Rating</option>
            </select>
            <label htmlFor="filter">Filter by rating:</label>
            <select id="filter" onChange={handleFilterChange} value={filterRating ?? 0}>
              <option value={0}>All</option>
              <option value={5}>5 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={2}>2 Stars</option>
              <option value={1}>1 Star</option>
            </select>
          </div>
          <ReviewForm onSubmit={addReview} />
          <ReviewList reviews={sortedFilteredReviews} onReviewClick={handleReviewClick} />
        </>
      )}
    </div>
  );
};

export default ReviewSection;
