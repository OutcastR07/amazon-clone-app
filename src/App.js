import React from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={
            <>
              <Header />
              <Home />
            </>
          }
          />
          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
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
