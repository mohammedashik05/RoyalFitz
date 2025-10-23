import React, { useContext, useState, useEffect } from "react";
import "../styles/CartSummaryTable.css";
import orderAnimation from "../animation/order_placed.json";
import Lottie from "lottie-react";
import { ProductContext } from "../components/ProductProvider.jsx";

function CartSummaryTable({ items, totalItems, totalPrice, discount, finalTotal, id }) {
  const { clearCart, orderPlaced, user, cartItems, products } = useContext(ProductContext);
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [placed, setPlaced] = useState(false);
  const [cart, setCart] = useState({});


  const handleCheckout = async () => {
    if (!user) {
      alert("User data not loaded yet.");
      return;
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!address.trim()) {
      alert("Please enter your shipping address.");
      return;
    }
    let cartData = cartItems; // default

    if (id) {
      const product = products.find((p) => p.id == id);
      if (!product) {
        alert("Product not found");
        return;
      }

      cartData = [
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ];
    }


    const orderData = {
      username: user.username,
      email: user.email,
      address: address,
      mobileNo: mobile,
      cart: cartData,
      totalAmount: finalTotal,
      status: "pending",
    };

    const success = await orderPlaced(orderData);
    if (!success) return;

    setPlaced(true);
    setMobile("");
    setAddress("");

    setTimeout(() => {
      clearCart();
      setPlaced(false);
    }, 5000);
  };


  return (
    <>
      <div className="summary-scroll">
        <table className="summary-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price}</td>
                <td>₹{(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Total Quantity</td>
              <td>{totalItems}</td>
            </tr>
            <tr>
              <td colSpan="3">Total Price</td>
              <td>₹{totalPrice.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="3">Discount (10%)</td>
              <td>-₹{discount.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="3">Final Total</td>
              <td>₹{finalTotal.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>

        <div className="address-section">
          <h3>Shipping Address</h3>
          <input
            className="address-number"
            placeholder="Enter your Mobile No"
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            maxLength={10}
          />
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

        {placed && (
          <div className="order-animation-overlay show">
            <div className="order-animation-box">
              <Lottie animationData={orderAnimation} className="order-animation" loop={false} />
              <h1 className="order-success-text">Order Placed Successfully!</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartSummaryTable;
