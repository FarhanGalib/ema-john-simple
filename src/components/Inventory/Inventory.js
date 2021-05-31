import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    const handleAddInventory = () =>{
        console.log("before uploading....",fakeData);
        fetch('http://localhost:4200/addProduct',{
                method: 'POST',
                body: JSON.stringify(fakeData),
                headers: {
                    "Content-Type" : "application/json; charset = UTF-8"
                }
            })
            .then(res => res.json())
            .then(data=>{
                console.log("after",data);
            });
    }
    return (
        <div>
            <button onClick={handleAddInventory}>Add inventory</button>
        </div>
    );
};

export default Inventory;