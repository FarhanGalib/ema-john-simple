import React from 'react';
import './ReviewItem.css';


const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    return (
        <div className="review-item">
            <h3 className="product-name">{name}</h3>
            <p>${price}</p>
            <p>Quantity: {quantity}</p>
            <button 
                className="main-button"
                onClick={()=> props.removeProduct(key)}
                > Remove</button>
        </div>
    );
};

export default ReviewItem;