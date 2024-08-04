import ProductDetails from "./ProductDetails";
import ProductCarousel from "./ProductImages";
import "./product.css";

const images = ["./images/w1.jpeg", "./images/w2.jpeg", "./images/w3.jpeg", "./images/w3.jpeg"];

const Product: React.FC = () => {
	return (
		<div className="product-container">
			<ProductCarousel images={images} />
			<ProductDetails />
		</div>
	);
};

export default Product;
