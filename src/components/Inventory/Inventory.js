import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    const showData = (data) =>{
        console.log(fakeData);
    }
    return (
        <div>
            <button onClick={showData}>show</button>
        </div>
    );
};

export default Inventory;