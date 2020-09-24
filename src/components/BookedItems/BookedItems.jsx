import React from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";

import "./BookedItems.css";

import CartItems from "../CartItems/CartItems";

function BookedItems({ order }) {
  return (
    <div className="bookedItems">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="bookedItems__id">
        <strong>Order ID : </strong>
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CartItems key={item.id} hideButton {...item} />
      ))}
      <CurrencyFormat
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        renderText={(value) => (
          <h3 className="bookedItems__total">Order Total: {value}</h3>
        )}
      />
    </div>
  );
}

export default BookedItems;
