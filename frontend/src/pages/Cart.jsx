// src/pages/Cart.jsx
import React, { useContext, useState, useMemo } from "react";
import { ProductContext } from "../components/ProductProvider.jsx";
import "../styles/Cart.css";
import CartSummaryTable from "../components/CartSummaryTable.jsx";
import { toast } from "react-hot-toast";

function Cart() {
  const [showSummary, setShowSummary] = useState(false);
  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart,
    products, // get live products from context
  } = useContext(ProductContext);

  // derive totals
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = totalPrice * 0.1;
  const finalTotal = totalPrice - discount;

  // derive per-item available stock from the up-to-date products array
  const enrichedCart = useMemo(() => {
    return cartItems.map((item) => {
      const product = products.find((p) => p._id === item.productId);
      const availableStock = Number(product?.stock ?? product?.stockCount ?? item.stock ?? 0);
      return { ...item, availableStock };
    });
  }, [cartItems, products]);

  // check if any item can't be fulfilled
  const canCheckout = useMemo(() => {
    if (enrichedCart.length === 0) return false;
    return enrichedCart.every((it) => it.availableStock > 0 && it.quantity <= it.availableStock);
  }, [enrichedCart]);

  // handle increment (uses provider function which also validates)
  const handleIncrement = (item) => {
    // if we have the latest stock, check first to avoid needless call
    if (item.quantity >= item.availableStock) {
      toast.error("Not enough stock available!");
      return;
    }
    incrementQuantity(item.productId);
  };

  // handle decrement (provider removes when qty becomes 0)
  const handleDecrement = (item) => {
    // call provider decrement which will remove if quantity becomes 0
    decrementQuantity(item.productId);
  };

  // handle buy now click
  const handleBuyNowClick = () => {
    if (!canCheckout) {
      toast.error("One or more items exceed available stock or are out of stock. Please update your cart.");
      return;
    }
    setShowSummary(true);
  };

  return (
    <div className="cart-container">
      {/* Left Side - Cart Items */}
      <div className="cart-items">
        <h2>Shopping Cart</h2>

        {enrichedCart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          enrichedCart.map((item) => {
            const isAtMax = item.quantity >= item.availableStock;
            const outOfStock = item.availableStock <= 0;

            return (
              <div key={item.productId} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">₹{item.price}</p>

                  {/* Quantity Controls */}
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleDecrement(item)}
                      disabled={item.quantity <= 1}
                      className={item.quantity <= 1 ? "disabled-btn" : "active-btn"}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => handleIncrement(item)}
                      disabled={isAtMax || outOfStock}
                      className={isAtMax || outOfStock ? "disabled-btn" : "active-btn"}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  {/* Stock Info */}
                  <p className="stock-info">
                    Stock available:{" "}
                    <strong>{item.availableStock > 0 ? item.availableStock : "Out of Stock"}</strong>
                  </p>

                  <button className="remove-btn" onClick={() => removeFromCart(item.productId)}>
                    Remove
                  </button>

                  <div className="item-subTotal">
                    <p>Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            );
          })
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
          <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
            <button
              className="buy-now-btn"
              onClick={handleBuyNowClick}
              disabled={!canCheckout}
              title={canCheckout ? "Proceed to checkout" : "Fix quantities/out of stock items first"}
            >
              Buy Now
            </button>

            <button
              className="clear-cart-btn"
              onClick={() => {
                if (window.confirm("Clear cart?")) clearCart();
              }}
            >
              Clear Cart
            </button>
          </div>
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

            <CartSummaryTable
              items={cartItems}
              totalItems={totalItems}
              totalPrice={totalPrice}
              discount={discount}
              finalTotal={finalTotal}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
