import React from "react";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
import ReviewSection from "../components/Review/ReviewSection";
import Product from "../components/Product/product";

const relatedProducts = [
	{
		id: 1,
		name: "Generic For Iphone For Samsung Tws Bluetooth",
		price: 320,
		imageUrl: "./images/buds1.jpg",
		productPageUrl: "/products/1",
	},
	{ id: 2, name: "Ancker Pro2i", price: 249.99, imageUrl: "./images/buds2.jpg", productPageUrl: "/products/2" },
	{ id: 3, name: "iphone wireless charger", price: 104, imageUrl: "./images/ch1.jpg", productPageUrl: "/products/3" },
	{ id: 4, name: "iphone15 pro6", price: 300, imageUrl: "./images/ph1.jpg", productPageUrl: "/products/4" },
];

const ProductPage: React.FC = () => {
	return (
		<div>
			<Product />
			<ReviewSection />
			<RelatedProducts products={relatedProducts} />
		</div>
	);
};

export default ProductPage;
