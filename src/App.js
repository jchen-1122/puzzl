import React, {useState, useContext, useEffect} from 'react';
import './App.css';
import StripeCheckout from "react-stripe-checkout";
import List from "./Components/List";
import Proceed from "./Components/Proceed"
import {Link} from "react-router-dom";

function App(props) {

  const [amount, setAmount] = useState({0:0, 1:0, 2:0})
  const [total, setTotal] = useState(0)

  return (
    <div className="App">
        <List amount={amount} setAmount={setAmount} total={total} setTotal={setTotal}></List>
        <Link to={{pathname: "/checkout", state: { amount: amount, total: total } }}>
        <Proceed text="Proceed to Checkout"></Proceed>
        </Link>
    </div>
  );
}

export default App;
