import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

function Products() {
  return (
    <div className="content">
      <ul className="products">
        {data.products.map((product) => (
          <li>
            <div className="product">
              <Link to={`/product/${product.id}`}>
                <img
                  className="product-image"
                  src={product.image}
                  alt="product"
                />
              </Link>
              <div className="product-name">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </div>
              <div className="product-brand">
                {product.category} / {product.subCategory}
              </div>
              <div className="product-quantity">
                {product.quantity} {product.unit}
              </div>
              <div className="product-price">
                {product.price} {product.currency} / {product.unit}
              </div>
              <div className="product-rating">
                {product.ratings}(Stars) {product.numReviews}(reviews)
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
