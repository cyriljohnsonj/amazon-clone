import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";

import "./Subtotal.css";

import { useStateValue } from "../../utils/StateProvider";
import { getBasketTotal } from "../../utils/reducer";

function Subtotal() {
  const history = useHistory();
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
