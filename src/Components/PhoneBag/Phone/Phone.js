import React from "react";
import "./Phone.css";
import Buttons from "../../UI/Button/Buttons";
import PhoneDetails from "./PhoneDetails/PhoneDetails";

const Phone = ({
  name,
  price,
  image,
  phoneCount,
  incrementCount,
  decrementCount,
  removePhone,
}) => (
  <article className="phoneBlock">
    <PhoneDetails
      name={name}
      price={price}
      image={image}
      removePhone={removePhone}
    />

    <Buttons
      phoneCount={phoneCount}
      incrementCount={incrementCount}
      decrementCount={decrementCount}
    />
  </article>
);
export default Phone;
