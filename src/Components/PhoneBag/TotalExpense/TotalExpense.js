import React from "react";
import "./TotalExpense.css";

const totalExpense = (props) => (
  <footer className="footer">
    <div className="totalExpense">
      <div>Total</div>
      <div>${props.totalPrice}</div>
    </div>
    <button className="clearChart" onClick={props.clearCart}>
      Clear Cart
    </button>
  </footer>
);
export default totalExpense;
