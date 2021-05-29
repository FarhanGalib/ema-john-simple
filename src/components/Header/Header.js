// import React, { useContext, useEffect, useRef, useState } from 'react';
import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

import { useAuth } from '../Login/useAuth';


// const usePrevious = value => {
//     const prev = useRef();
//     useEffect(()=>{
        
//         prev.current=value;
        
//     },[value])
//     console.log(prev.current);
//     return prev.current;
// }


const Header = () => {

    const auth = useAuth();
   
    
    // const user = useContext(UserContext);

    // const [count, setCount] = useState(0);

    // const previous = usePrevious(count);
    return (
        <div className="header">
            <img src={logo} alt="" />
            {/* <h1>current: {count} previous: {previous}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button> */}
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                {
                    auth.user && 
                    <span style={{color: 'yellow'}}>{auth.user.name}</span>
                 
                }
                {
                    auth.user ? 
                    //<button onClick={handleSignOut}>SignOut</button>
                     <a href="/login">sign out</a>
                    :<a href="/login">sign in</a>
                }
            </nav>
        
        </div>
 
    );
};

export default Header;