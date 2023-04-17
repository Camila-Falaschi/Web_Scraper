import React from 'react';
import PropTypes from 'prop-types';


function ProductCard({ product }) {
  const {
    img,
    name,
    price,
    category,
    website,
  } = product;

  return (
    <div>
        <img src={img} alt="product" />
        <h2>{name}</h2>
        <h3>{price}</h3>
        <p>{category}</p>
        <p>{website}</p>
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
  }).isRequired,
};

export default ProductCard;