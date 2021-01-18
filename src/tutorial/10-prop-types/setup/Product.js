import React from 'react';
import PropTypes from 'prop-types';
import DefaultImage from  '../../../assets/default-image.jpeg'
const Product = ({image,name,price}) => {
  const url=image && image.url
  return <article className='product'>
    <img src={url || DefaultImage} alt=""/>
    <h4>{name}</h4>
    <h5>${price}</h5>
  </article>;
};

Product.propTypes={
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired
};
Product.defaultProps={
  name:'default name',
  image:DefaultImage,
  price:0.00
}
export default Product;
