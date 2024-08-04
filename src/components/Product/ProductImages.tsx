import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ProductImages.css";
import { v4 as uuidv4 } from "uuid";

interface ProductCarouselProps {
	images: string[];
}

const CustomPaging = (src: string, index: number) => {
	return (
		<a href="not">
			<img src={src} alt={`Product ${index + 1}`} />
		</a>
	);
};
const ProductCarousel: React.FC<ProductCarouselProps> = ({ images }) => {
	const [nav1, setNav1] = useState<Slider | undefined>(undefined);
	const [nav2, setNav2] = useState<Slider | undefined>(undefined);

	let sliderRef1 = useRef<Slider | null>(null);
	let sliderRef2 = useRef<Slider | null>(null);

	useEffect(() => {
		if (sliderRef1?.current) {
			setNav1(sliderRef1.current);
		}
		if (sliderRef2.current) {
			setNav2(sliderRef2.current);
		}
	}, [sliderRef1, sliderRef2]);

	const settings = {
		CustomPaging: (index: number) => CustomPaging(images[index], index),
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className="carousel-container">
			<Slider slidesToShow={1}  asNavFor={nav2} ref={(slider) => (sliderRef1.current = slider)}>
				{images.map((image, index) => (
					<div key={uuidv4()} className="carousel-slide">
						<img src={image} alt={`Product ${index + 1}`} />
					</div>
				))}
			</Slider>
			<Slider
				{...settings}
				asNavFor={nav1}
				ref={(slider) => (sliderRef2.current = slider)}
				slidesToShow={3}
				focusOnSelect={true}
			>
				{images.map((image, index) => (
					<div key={uuidv4()} className="carousel-slide">
						<img src={image} alt={`Product ${index + 1}`} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default ProductCarousel;
