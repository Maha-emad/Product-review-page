import React from "react";
import "./productDetails.css";

const ProductDetails: React.FC = () => {
	return (
		<div className="details-container">
			<div className="description">
				<h2>Smart Watch Pro2i</h2>
				<p>
					Experience the future of wearable technology with the Pro2i Smart Watch. This sleek, stylish accessory is more
					than just a timepiece—it's your personal assistant, fitness coach, and health monitor, all in one.
				</p>
			</div>
			<div className="product-features">
				<ul className="feature-list">
					<li>
						<strong>Stunning Display:</strong> Enjoy vibrant visuals on a high-resolution 1.78 inch AMOLED display.
					</li>
					<li>
						<strong>Advanced Health Monitoring:</strong> Real-time monitoring of heart rate, blood oxygen levels, sleep
						patterns, and more.
					</li>
					<li>
						<strong>Fitness Tracking:</strong> Built-in GPS, step counting, calorie tracking, and multiple sports modes.
					</li>
					<li>
						<strong>Seamless Connectivity:</strong> Notifications for calls, texts, and app alerts.
					</li>
					<li>
						<strong>Long-lasting Battery Life:</strong> Up to [X] days of battery life.
					</li>
					<li>
						<strong>Customizable Design:</strong> Interchangeable bands and customizable watch faces.
					</li>
					<li>
						<strong>Water-Resistant:</strong> Up to [depth] meters.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProductDetails;
