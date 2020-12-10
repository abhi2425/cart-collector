import React from "react";
import "./PhoneDetails.css";

const phoneDetails = (props) => (
  <div className="phone">
    <div className="phone__image">
      <img className="phone__image--style" src={props.image} alt={props.name} />
    </div>
    <div className="phone__details">
      <div>
        <div className="phone__details--name">{props.name}</div>
        <div className="phone__details--price">${props.price}</div>
        <button className="phone__details--remove" onClick={props.removePhone}>
          remove
        </button>
      </div>
    </div>
  </div>
);
export default phoneDetails;
