import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51HPvW2EnJe5O33eJT6u3jzAA9r59NbRdCkpLv2cSS5sR7zTawU3fZBFbTc3y5dpw5lCEuBPTZWJDmNDI2WVq5h1l00KvMIpVsx"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //

    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USE IS >>>", authUser);
      if (authUser) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logout
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
            <h1>Login Page</h1>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
