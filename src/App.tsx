import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import ProductPage from "./Pages/ProductPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Policies from "./Pages/Policies/Policies";
import FAQs from "./Pages/FAQs/FAQs";

const App: React.FC = () => {
	return (
		<Router>
			<div className="app">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<ProductPage />} />
						<Route path="/policies" element={<Policies />} />
						<Route path="/faqs" element={<FAQs />} />
					</Routes>
				</main>
			</div>
			<Footer />
		</Router>
	);
};

export default App;
