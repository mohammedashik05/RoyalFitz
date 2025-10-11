import React, { useContext, useState } from "react";
import { ProductContext } from "../components/ProductProvider.jsx";
import "../styles/Cart.css";
import orderAnimation from "../animation/order_placed.json";
import Lottie from "lottie-react";
import CartSummaryTable from "../components/CartSummaryTable.jsx";

function Cart() {
  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart,
  } = useContext(ProductContext);

  const [showSummary, setShowSummary] = useState(false);
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = totalPrice * 0.1;
  const finalTotal = totalPrice - discount;

  const handleCheckout = () => {
    if (!address.trim()) {
      alert("Please enter your shipping address before proceeding.");
      return;
    }

    setOrderPlaced(true);
    setShowSummary(false);
    setAddress("");
    clearCart();

    setTimeout(() => {
      setOrderPlaced(false);
    }, 5000);
  };

  return (
    <>
      <div className="cart-container">
        {/* Left Side - Cart Items */}
        <div className="cart-items">
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">₹{item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                  <div className="item-subTotal">
                    <p>Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Side - Summary */}
        <div className="cart-summary">
          <h2>Cart Summary</h2>
          <p>Total Products: {cartItems.length}</p>
          <p>Total Quantity: {totalItems}</p>
          <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
          <p>Discount (10%): -₹{discount.toFixed(2)}</p>
          <h3>Final Total: ₹{finalTotal.toFixed(2)}</h3>

          {cartItems.length > 0 && (
            <button className="buy-now-btn" onClick={() => setShowSummary(true)}>
              Buy Now
            </button>
          )}
        </div>

        {/* Popup Summary */}
        {showSummary && (
          <div className="summary-popup">
            <div className="summary-content">
              <span className="close-btn" onClick={() => setShowSummary(false)}>
                ✖
              </span>
              <h2>Detailed Cart Summary</h2>

              {/* ✅ Reusable Component */}
              <CartSummaryTable
                items={cartItems}
                totalItems={totalItems}
                totalPrice={totalPrice}
                discount={discount}
                finalTotal={finalTotal}
              />

              {/* Address Input */}
              <div className="address-section">
                <h3>Shipping Address</h3>
                <textarea
                  placeholder="Enter your delivery address..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows="3"
                />
              </div>

              <div className="summary-footer">
                <button className="buy-now-btn" onClick={handleCheckout}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Order placed animation overlay */}
        {orderPlaced && (
          <div className="order-animation-overlay show">
            <div className="order-animation-box">
              <Lottie animationData={orderAnimation} loop={false} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
