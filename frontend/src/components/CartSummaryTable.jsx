import React from "react";
import "../styles/CartSummaryTable.css";

function CartSummaryTable({ items, totalItems, totalPrice, discount, finalTotal }) {
  return (
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
    </div>
  );
}

export default CartSummaryTable;
