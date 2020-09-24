import React from "react";

import "./CartItems.css";

import { useStateValue } from "../../utils/StateProvider";

function Cartitems({ id, title, price, rating, image, hideButton }) {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="cartItems">
      <img className="cartItems__image " src={image} alt={title} />
      <div className="cartItems__info">
        <p className="cartItems__title">{title}</p>
        <p className="cartItems__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="cartItems__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default Cartitems;
