import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total, pd)=> total+pd.price*pd.quantity,0);
    
    let shipping = 0;
    if(total > 35){
        shipping=0;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if (total > 0)
    {
        shipping = 12.99;
    }
    const tax = total/10;

    const grandTotal = total + tax + shipping;

    const formateNumber = (number =>{
        return parseFloat(number.toFixed(2));
    });

    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Item Ordered: {cart.length}</h5>
            <p><small>Shipping Cost: {formateNumber(shipping)}</small></p>
            <p><small>Product Price: {formateNumber(total)}</small></p>
            <p><small>Tax + Vat: {formateNumber(tax)}</small></p>
            <h5>Total Price: {formateNumber(grandTotal)}</h5>
            {
                props.children
            }
        </div>
    );
};

export default Cart;