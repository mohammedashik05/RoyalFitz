import React, { createContext, useState } from "react";

// 1️⃣ Create Context
export const ProductContext = createContext();

// 2️⃣ Provider Component
export default function ProductProvider({ children }) {
  /* ------------------- CART STATE ------------------- */
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart (or increment quantity if exists)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // increment quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // add new product with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Increment quantity of an item
  const incrementQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement quantity but not below 1
  const decrementQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  // Remove an item completely from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  /* ------------------- WISHLIST STATE ------------------- */
  const [wishlist, setWishlist] = useState([]);

  // Toggle add/remove from wishlist
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      return exists
        ? prev.filter((item) => item.id !== product.id) // remove if exists
        : [...prev, product]; // add if not
    });
  };

  /* ------------------- CONTEXT VALUE ------------------- */
  return (
    <ProductContext.Provider
      value={{
        // cart functions & data
        cartItems,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        clearCart,
        // wishlist functions & data
        wishlist,
        toggleWishlist,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
