import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";

import { auth } from "./firebase/config";
import { useStateValue } from "./utils/StateProvider";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import Header from "./components/Header/Header";

const promise = loadStripe(
  ""
);
// ADD stripe public key above

function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
