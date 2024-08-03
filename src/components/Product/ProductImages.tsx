import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './ProductImages.css';


interface ProductCarouselProps {
  images: string[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Product image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
