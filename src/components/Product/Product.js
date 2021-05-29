import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { name, price, img, seller, stock, key } = props.product;
  //console.log(props.product);
 
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      
      <div className="product-details">
        <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link> </h4>
        <p><small>By: {seller}</small></p>
        <p><b>${price}</b></p>
        <p><small>Only {stock} left in stock - Order now</small></p>

        {props.showAddToCart && <button
          onClick={() =>props.handleAddProduct(props.product)}
          className="main-button"
        >
           <FontAwesomeIcon icon={faShoppingCart} />&nbsp; add to cart
        </button>}
      </div>
    </div>
  );
};

export default Product;
