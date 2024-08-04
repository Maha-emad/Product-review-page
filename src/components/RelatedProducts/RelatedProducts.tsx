import React from 'react';
import './RelatedProducts.css';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  productPageUrl: string;
};

type RelatedProductsProps = {
  products: Product[];
};

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <a href={product.productPageUrl}>
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
            </a>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
