import React, { createContext, useState } from "react";

import products from "../data/products";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

 
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
      
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = (id) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decrementQuantity = (id) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    )
  );
};

const removeFromCart = (id) => {
  setCartItems((prev) => prev.filter((item) => item.id !== id));
};

const clearCart =()=>{
  setCartItems([]);

}

// Make sure to export these:



  return (
    <ProductContext.Provider value={{ cartItems, addToCart, incrementQuantity, decrementQuantity, removeFromCart ,clearCart}}>
      {children}
    </ProductContext.Provider>
  );
}


export default ProductProvider;