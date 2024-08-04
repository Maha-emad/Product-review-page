import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="header-content">
				<div className="logo">
					<img src="/images/logo.png" alt="Logo" />
				</div>
				<nav className="nav">
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/products">Products</a>
						</li>
						<li>
							<a href="/wishs">Wishlist</a>
						</li>
						<li className="cart">
							<a href="/about">
								<FontAwesomeIcon icon={faShoppingCart} size="2x" color="#1e10bf" />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
