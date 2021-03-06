import React, { useEffect, useState } from 'react';
import { useParams  } from 'react-router';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4200/product/'+productKey)
        .then((res) => res.json())
        .then(data=>setProduct(data))
    },[])
    
    return (
        <div>
           {
            product && 
            <Product showAddToCart={false} product={product}></Product>
           }
        </div>
    );
};

export default ProductDetails;