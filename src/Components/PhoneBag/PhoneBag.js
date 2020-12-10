import React from "react";
import "./PhoneBag.css";

const phoneBag = (props) => (
  <section className="phoneBag">
    <div>
      <div className="heading">Your Bag</div>
      <div
        style={{
          marginTop: "20px",
          width: "60vw",
        }}
      >
        {props.children}
      </div>
    </div>
  </section>
);
export default phoneBag;
