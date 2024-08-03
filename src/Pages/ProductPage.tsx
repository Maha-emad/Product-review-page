import React from 'react';
import ProductCarousel from '../components/Product/ProductImages';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
];

const ProductPage: React.FC = () => {
  return (
    <div>
      <h1>Smart Watch Pro2i</h1>
      <ProductCarousel images={images} />
      
    </div>
  );
};

export default ProductPage;
