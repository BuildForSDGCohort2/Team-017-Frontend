import React from "react";
import { Link } from "react-router-dom";
import { Categories, Footer, Header } from "../common";
import data from "../data";
function SingleProduct(props) {
  const singleProduct = data.products.find(
    (product) => product.id == props.match.params.id
  );
  return (
    <div className="grid-container">
      <Header />
      <aside class="sidebar">
        <Categories />
      </aside>
      <div>
        <div className="details-back">
          <Link to="/">Back to results</Link>
        </div>
        <div className="details">
          <div className="details-image">
            <img src={singleProduct.image} />
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h4>{singleProduct.name}</h4>
              </li>
              <li>
                {singleProduct.ratings} Stars ({singleProduct.numReviews}{" "}
                Reviews)
              </li>
              <li>
                <h5>
                  Quantity : {singleProduct.quantity} {singleProduct.unit}
                </h5>
              </li>
              <li>
                <h5>
                  Price : {singleProduct.price} {singleProduct.currency}
                </h5>
              </li>
              <li>
                <b>Description :</b>
                <div>{singleProduct.description}</div>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>Price: {singleProduct.price}</li>
              <li>Status: {singleProduct.status}</li>
              <li>
                Quantity:
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </li>
              <li>
                <button>Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
