import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

import { useEffect } from "react";
import Payment from "./Payment";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";


const promise = loadStripe('pk_test_51LaTysSJ1UhM3IDC6l6v8txNmrM5OQHCT54DpPxqx7qxQlKfH9byKatHVuodXKm3h383gou36gRgUjWnol3uvFTT00vdVTCgxu');

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        
        <Routes>
        <Route path="/orders" element={<><Header /><Orders /> </> } />
          <Route path="/" element={<><Header /><Home /> </>} />
          <Route path="/checkout" element={<><Header /><Checkout /> </>} />
          <Route path="/login" element={<Login />} />
           
               <Route path="/payment" element={<><Header />
               <Elements stripe={promise} >
               <Payment /> </Elements> </>} />
               
               
        </Routes>
      </div>
    </Router>
  );
}

export default App;
