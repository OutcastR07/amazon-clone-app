import React, { useEffect } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login'
import Payment from './Payment';
import Orders from './Orders';
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51MRqWLGukv3xB98hXjBbqqOI9Uu5chXjTnQIPctqeykBLfkIbssjjTvQGcGHvxcYu5yucjjBoAQvO661rKJeT4Og00uWPgftGF');

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });

      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
          />
          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
              <Footer />
            </>
          }
          />
          <Route path="/orders" element={
            <>
              <Header />
              <Orders />
              <Footer />
            </>
          }
          />
          <Route path="/payment" element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              <Footer />
            </>
          }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
