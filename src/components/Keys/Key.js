import React, { useState } from 'react'
import './Key.css'

const products = [
    {id: 1, name: "Laptop", brand: 'Dell', qty: 1},
    {id: 2, name: "Laptop", brand: 'HP', qty: 1},
    {id: 3, name: "Laptop", brand: 'Lenovo', qty: 1},
];

const Key = () => {
    const [items,setItem] = useState(products);

    const changeQty = (id) => {
    const newItem = items.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 }  : item
        );
        setItem(newItem)
    };

  return (
    <div>
        {items.map((product) => (
         <div className='product' key={product.id}>
             <h1>{product.name} </h1>
             <h3>Brand:{product.brand}</h3>
             <h4>Qty: {product.qty}</h4>
             <button onClick={() => changeQty(product.id)} type='button'>+</button>
         </div>
        ))}
       
    </div>
  );
    
  
}

export default Key