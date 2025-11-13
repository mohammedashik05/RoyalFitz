import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isAdmin, setIsAdmin] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [productsFetched, setProductsFetched] = useState(false);

  const apiUrl = import.meta.env.VITE_URL;

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishListCount = wishlist.length;

  //  🧩 PRODUCTS
  const fetchProducts = async (force = false) => {
    if (productsFetched && !force) return;
    try {
      const res = await axios.get(`${apiUrl}/api/products/`);
      setProducts(res.data);
      setProductsFetched(true);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const refreshProducts = async () => fetchProducts(true);


  //  👤 USER PROFILE & AUTH

  const fetchUser = async () => {
    if (!token) return null;
    try {
      const res = await axios.get(`${apiUrl}/api/info/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
      return res.data;
    } catch (err) {
      console.error("Error fetching user:", err);
      return null;
    }
  };

  useEffect(() => {
    fetchUser();
  }, [token]);

  // 🔄 Sync login/logout across all tabs
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "token") {
        setToken(e.newValue || "");
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);


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

  //  🖼️ UPLOAD AVATAR (Cloudinary)
  const uploadAvatar = async (file) => {
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const res = await axios.put(`${apiUrl}/api/info/upload-avatar`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      await fetchUser(); // 🔥 force fresh user with new avatar
      toast.success("Profile picture updated!");
    } catch (err) {
      console.error("Avatar upload failed:", err);
      toast.error("Failed to upload avatar");
    }
  };


  //  ✏️ UPDATE PROFILE INFO 
  const updateProfile = async (profileData) => {
    try {
      const res = await axios.put(`${apiUrl}/api/info/update-profile`, profileData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.user);
      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error("Profile update error:", err);
      toast.error("Failed to update profile");
    }
  };

  //  🔒 UPDATE PASSWORD

  const updatePassword = async (oldPassword, newPassword) => {
    try {
      const res = await axios.put(
        `${apiUrl}/api/info/update-password`,
        { oldPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success(res.data.message || "Password updated successfully!");
    } catch (err) {
      console.error("Password update error:", err);
      toast.error(err.response?.data?.message || "Failed to update password");
    }
  };

  // 🛒 CART MANAGEMENT

  useEffect(() => {
    if (!token) return;
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/user/data`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCartItems(res.data.cart || []);
        setWishlist(res.data.wishlist || []);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };
    fetchUserData();
  }, [token]);

  const addToCart = async (product) => {
    if (!token) return toast.error("Please log in to add items to cart");
    const stock = Number(product.stock ?? product.stockCount ?? 0);
    if (stock <= 0) return toast.error("This product is out of stock!");

    const existingItem = cartItems.find((i) => i.productId === product._id);
    if (existingItem) {
      incrementQuantity(product._id);
      return;
    }

    try {
      const res = await axios.post(
        `${apiUrl}/api/user/cart`,
        {
          productId: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
          stock,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItems(res.data.cart);
      toast.success("Added to cart!");
    } catch (err) {
      toast.error("Failed to add to cart");
    }
  };

  const incrementQuantity = async (productId) => {
    const item = cartItems.find((i) => i.productId === productId);
    if (!item) return;

    const product = products.find((p) => p._id === productId);
    const stock = Number(product?.stock ?? product?.stockCount ?? 0);

    if (item.quantity >= stock) return toast.error("Not enough stock available!");

    try {
      const res = await axios.put(
        `${apiUrl}/api/user/cart`,
        { productId, quantity: item.quantity + 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItems(res.data.cart);
    } catch {
      toast.error("Failed to update quantity");
    }
  };

  const decrementQuantity = async (productId) => {
    const item = cartItems.find((i) => i.productId === productId);
    if (!item) return;

    if (item.quantity === 1) return removeFromCart(productId);

    try {
      const res = await axios.put(
        `${apiUrl}/api/user/cart`,
        { productId, quantity: item.quantity - 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItems(res.data.cart);
    } catch {
      toast.error("Failed to update quantity");
    }
  };

  const removeFromCart = async (_id) => {
    try {
      const res = await axios.delete(`${apiUrl}/api/user/cart/${_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(res.data.cart);
      toast.success("Removed from cart");
    } catch {
      toast.error("Failed to remove item");
    }
  };

  const clearCart = async () => {
    try {
      const res = await axios.put(
        `${apiUrl}/api/user/cart/clear`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItems(res.data.cart);
      toast.success("Cart cleared");
    } catch {
      toast.error("Failed to clear cart");
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
        const productId = item.productId;
        const quantity = item.quantity || 1;

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




  //  ❤️ WISHLIST
  const toggleWishlist = async (product) => {
    if (!token) return toast.error("Please log in to modify wishlist");
    try {
      const productId = product._id || product.productId;
      const exists = wishlist.find((item) => item.productId === productId);
      let res;
      if (exists) {
        res = await axios.put(
          `${apiUrl}/api/user/wishlist/remove`,
          { productId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Removed from wishlist");
      } else {
        res = await axios.post(
          `${apiUrl}/api/user/wishlist`,
          {
            productId,
            name: product.name,
            price: product.price,
            image: product.image,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Added to wishlist");
      }
      setWishlist(res.data.wishlist);
    } catch {
      toast.error("Failed to update wishlist");
    }
  };




  //  🔔 LOW STOCK NOTIFICATIONS
  const fetchNotificationCount = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/notifications/low-stock-count`);
      if (res.data.success) setNotificationCount(res.data.count || 0);
    } catch (err) {
      console.error("Error fetching notification count:", err);
    }
  };

  useEffect(() => {
    fetchNotificationCount();
    const interval = setInterval(fetchNotificationCount, 15000);
    return () => clearInterval(interval);
  }, []);


  // 🔥 SET TOKEN (use this after login)
  const setAuthToken = (newToken) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
      setToken(newToken);
    } else {
      localStorage.removeItem("token");
      setToken("");
    }
  };

  // 🔥 LOGOUT FUNCTION
  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };


  //  PROVIDER EXPORT
  return (
    <ProductContext.Provider
      value={{
        products,
        cartItems,
        wishlist,
        user,
        token,
        isAdmin,
        notificationCount,
        cartCount,
        wishListCount,

        // Auth/Profile Methods
        fetchUser,
        updateProfile,
        updatePassword,
        uploadAvatar,
        verifyAdmin,
        setAuthToken,   // 🔥 added
        logout,         // 🔥 added

        // Product/Cart Methods
        refreshProducts,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        clearCart,
        orderPlaced,

        // Wishlist
        toggleWishlist,
      }}
    >
      {children}
    </ProductContext.Provider>

  );
}
