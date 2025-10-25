import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// 1️⃣ Create Context
export const ProductContext = createContext();

// 2️⃣ Provider Component
export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isAdmin, setIsAdmin] = useState(false);


  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishListCount=wishlist.reduce((acc,item) => acc+item.quantity,0);

  //  Fetch all products on app start
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/");
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  //  Fetch user-specific cart & wishlist if logged in
  useEffect(() => {
    if (!token) return;

    const fetchUserData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user/data", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCartItems(res.data.cart);
        setWishlist(res.data.wishlist);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };
    fetchUserData();
  }, [user, token]);

  // Fetch user profile
  const fetchUser = async () => {
    if (!token) return null;

    try {
      const res = await axios.get("http://localhost:5000/api/info/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
      return res.data;
    } catch (err) {
      console.log("Error fetching user data:", err);
      return null;
    }
  };

  useEffect(() => {
    fetchUser();
  }, [token]);

  // Verify Admin
  const verifyAdmin = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/info/verify-admin",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setIsAdmin(res.data.isAdmin || false);
      return res.data;
    } catch (err) {
      console.error("Admin verification failed:", err);
      setIsAdmin(false);
      return { isAdmin: false };
    }
  };

  //  Add to Cart (with backend)
  const addToCart = async (product) => {
    if (!token) {
      alert("Please log in to add products to cart");
      return;
    }

    try {
      console.log(product);
      const existingItem = cartItems.find((i) => i.productId === product._id);

      if (existingItem) {
        incrementQuantity(product._id);
        return;
      }

      const res = await axios.post(
        "http://localhost:5000/api/user/cart",
        {
          productId: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1, // always add 1 item per click
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setCartItems(res.data.cart);
    } catch (err) {
      console.error(err);
    }
  };

  // Increment quantity in cart
  const incrementQuantity = async (productId) => {
    console.log(productId);
    const item = cartItems.find((i) => i.productId === productId);
    if (!item) return;

    try {
      const res = await axios.put(
        "http://localhost:5000/api/user/cart",
        { productId, quantity: item.quantity + 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItems(res.data.cart);
    } catch (err) {
      console.error(err);
    }
  };

  // Decrement quantity in cart
  const decrementQuantity = async (productId) => {
    const item = cartItems.find((i) => i.productId === productId);
    if (!item) return;

    if (item.quantity === 1) {
      removeFromCart(productId);
      return;
    }

    try {
      const res = await axios.put(
        "http://localhost:5000/api/user/cart",
        { productId, quantity: item.quantity - 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItems(res.data.cart);
    } catch (err) {
      console.error(err);
    }
  };

  // Remove from cart
  const removeFromCart = async (_id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/user/cart/${_id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItems(res.data.cart);
    } catch (err) {
      console.error(err);
    }
  };

  // Clear cart
  const clearCart = async () => {
    try {
      const res = await axios.put(
        "http://localhost:5000/api/user/cart/clear",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItems(res.data.cart);
    } catch (err) {
      console.error(err);
    }
  };

  // Toggle wishlist
  const toggleWishlist = async (product) => {
    if (!token) {
      alert("Please log in to modify wishlist");
      return;
    }

    try {
      let productid=product._id;
      if(product.productId)  productid=product.productId;




      const exists = wishlist.find((item) => item.productId === productid);
      // console.log(exists); 
      let res;
      if (exists) {
        // Remove from wishlist
        res = await axios.put(
          "http://localhost:5000/api/user/wishlist/remove",
          { productId: productid },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        // Add to wishlist
        res = await axios.post(
          "http://localhost:5000/api/user/wishlist",
          {
            productId: product._id,
            name: product.name,
            price: product.price,
            image: product.image,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      setWishlist(res.data.wishlist);
    } catch (err) {
      console.error(err);
    }
  };

  // Place Order
  const orderPlaced = async (orderData) => {
    if (
      !orderData.username ||
      !orderData.email ||
      !orderData.address ||
      !orderData.mobileNo ||
      !orderData.cart ||
      !orderData.totalAmount
    ) {
      console.error("All fields are required");
      return false;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/orderPlaced/orderplaced",
        orderData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Order placed successfully:", res.data);
      return true;
    } catch (err) {
      console.error("Error placing order:", err.response?.data || err.message);
      return false;
    }
  };

  return (
    <ProductContext.Provider
      value={{
        verifyAdmin,
        isAdmin,
        user,
        token,
        products,
        cartItems,
        cartCount,
        wishListCount,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        clearCart,
        wishlist,
        toggleWishlist,
        orderPlaced,
        fetchUser,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
