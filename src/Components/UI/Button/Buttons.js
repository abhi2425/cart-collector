import React from "react";
import "./Buttons.css";

const buttons = (props) => (
  <div>
    <button className="btn btn--increment" onClick={props.incrementCount}>
      &#708;
    </button>
    <div className="counter">{props.phoneCount}</div>
    <button className="btn btn--decrement" onClick={props.decrementCount}>
      &#709;
    </button>
  </div>
);
export default buttons;
