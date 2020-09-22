import React from "react";

import "./Cart.css";

import Subtotal from "../../components/Subtotal/Subtotal";

function Cart() {
  return (
    <div className="cart">
      <div className="cart__left">
        <img
          className="cart__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Amazon Banner"
        />
        <div>
          <h2 className="cart__title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="cart__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;
