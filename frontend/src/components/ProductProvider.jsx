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

  const apiUrl = import.meta.env.VITE_URL;

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishListCount = wishlist.reduce((acc, item) => acc + item.quantity, 0);
const [notificationCount, setNotificationCount] = useState(0);

  // const lowStockCount =Notification.reduce((acc,item)=> acc+ item.quantity ,0);

  // 🟢 Fetch All Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/products/`);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  // 🟢 Fetch User Data (cart & wishlist)
  useEffect(() => {
    if (!token) return;
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/user/data`, {
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

  // 🟢 Fetch Logged-in User Info
  const fetchUser = async () => {
    if (!token) return null;
    try { 
      const res = await axios.get(`${apiUrl}/api/info/profile`, {
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

  // 🟢 Verify Admin
  const verifyAdmin = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/info/verify-admin`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsAdmin(res.data.isAdmin || false);
      return res.data;
    } catch (err) {
      console.error("Admin verification failed:", err);
      setIsAdmin(false);
      return { isAdmin: false };
    }
  };

  // 🛒 Add to Cart with Stock Check
  const addToCart = async (product) => {
    if (!token) {
      alert("Please log in to add products to cart");
      return;
    }

    if (product.stockCount <= 0) {
      alert("This product is out of stock!");
      return;
    }

    try {
      const existingItem = cartItems.find((i) => i.productId === product._id);
      if (existingItem) {
        incrementQuantity(product._id);
        return;
      }

      const res = await axios.post(
        `${apiUrl}/api/user/cart`,
        {
          productId: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
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

  // 🔼 Increment Quantity
  const incrementQuantity = async (productId) => {
    const item = cartItems.find((i) => i.productId === productId);
    if (!item) return;

    const product = products.find((p) => p._id === productId);
    if (product && item.quantity >= product.stockCount) {
      alert("Not enough stock available!");
      return;
    }

    try {
      const res = await axios.put(
        `${apiUrl}/api/user/cart`,
        { productId, quantity: item.quantity + 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItems(res.data.cart);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔽 Decrement Quantity
  const decrementQuantity = async (productId) => {
    const item = cartItems.find((i) => i.productId === productId);
    if (!item) return;

    if (item.quantity === 1) {
      removeFromCart(productId);
      return;
    }

    try {
      const res = await axios.put(
        `${apiUrl}/api/user/cart`,
        { productId, quantity: item.quantity - 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItems(res.data.cart);
    } catch (err) {
      console.error(err);
    }
  };

  // ❌ Remove from Cart
  const removeFromCart = async (_id) => {
    try {
      const res = await axios.delete(`${apiUrl}/api/user/cart/${_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(res.data.cart);
    } catch (err) {
      console.error(err);
    }
  };

  // 🧹 Clear Cart
  const clearCart = async () => {
    try {
      const res = await axios.put(
        `${apiUrl}/api/user/cart/clear`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItems(res.data.cart);
    } catch (err) {
      console.error(err);
    }
  };

  // ❤️ Toggle Wishlist
  const toggleWishlist = async (product) => {
    if (!token) {
      alert("Please log in to modify wishlist");
      return;
    }

    try {
      let productid = product._id;
      if (product.productId) productid = product.productId;

      const exists = wishlist.find((item) => item.productId === productid);
      let res;
      if (exists) {
        res = await axios.put(
          `${apiUrl}/api/user/wishlist/remove`,
          { productId: productid },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        res = await axios.post(
          `${apiUrl}/api/user/wishlist`,
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

  // ✅ Place Order + Reduce Stock + Notify Admin
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
    // 🟢 Place order first
    const res = await axios.post(
      `${apiUrl}/api/orderPlaced/orderplaced`,
      orderData,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log("✅ Order placed:", res.data);

    // 🟢 Reduce stock for each cart item
    for (const item of orderData.cart) {
      const productId =  item.productId;
      const quantity =  item.quantity || 1;

      if (!productId) {
        console.warn("⚠️ Missing product ID in item:", item);
        continue;
      }

      console.log(`Reducing stock for ${productId} by ${quantity}`);

      await axios.put(`${apiUrl}/api/products/reduce-stock/${productId}`, { quantity });
    }

    // 🟢 Refresh products after stock update
    const updated = await axios.get(`${apiUrl}/api/products/`);
    setProducts(updated.data);

    return true;
  } catch (err) {
    console.error("Error placing order:", err.response?.data || err.message);
    return false;
  }
};


// 🟢 Fetch low stock count
const fetchNotificationCount = async () => {
  try {
    const res = await axios.get(`${apiUrl}/api/notifications/low-stock-count`);
    if (res.data.success) setNotificationCount(res.data.count || 0);
  } catch (err) {
    console.error("Error fetching notification count:", err.message);
  }
};

// fetch on load
useEffect(() => {
  fetchNotificationCount();
  const interval = setInterval(fetchNotificationCount, 15000); // refresh every 15s
  return () => clearInterval(interval);
}, []);




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
        notificationCount,
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
