import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData";
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import happyImage from "../../images/giphy.gif";
import { useAuth } from "../Login/useAuth";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced , setOrderPlaced] = useState(false);
  const auth = useAuth();

  const removeProduct=(productKey) => {
    const newProduct = cart.filter(pd => pd.key!==productKey);
    setCart(newProduct);
    removeFromDatabaseCart(productKey);
  }

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cartProducts = productKeys.map((key) => {
      const products = fakeData.find((pd) => pd.key === key);
      
      products.quantity = savedCart[key];
      return products;
    });
    setCart(cartProducts);
   
  },[]);


  const handlePlaceOrder = () =>{
    processOrder();
    setOrderPlaced(true);
    setCart([]);
  }

  let thankYou ;
  if(orderPlaced){
    thankYou = <img src={happyImage} alt="" />
  }


  return (
    <div className="shop-container">
      <div className="product-container">
          
        {
          cart.map(pd=> <ReviewItem
            key={pd.key}
            removeProduct={removeProduct} 
            product={pd}
            ></ReviewItem>)
        }
        {
          thankYou
        }
        {
          !cart.length && 
          <h1>Cart is empty.<a href="/">Keep shopping.</a></h1>
        }
      </div>
     

      <div className="cart-container">
        <Cart cart={cart}>
         <Link to="/shipment">
          { 
            auth.user?
            <button  className="main-button">Proceed checkout</button>
            :
            <button  className="main-button">login to Proceed</button>
          }
         </Link>
          
        </Cart>
      </div>
    </div>
  );
};

export default Review;
