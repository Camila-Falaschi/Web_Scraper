import React from "react";
import PropTypes from "prop-types";
import "../Styles/productCard.css";

function ProductCard({product}) {
  const { img, name, price, category, website } = product;

  return (
    <div className="card">
      <img className="image" src={img} alt="product" />
      <h2 className="name">{name}</h2>
      <h3 className="price">{price}</h3>
      <p className="category">Category: {category}</p>
      <p className="website">Website: {website}</p>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    category: PropTypes.string,
    website: PropTypes.string,
  }),
};

export default ProductCard;
