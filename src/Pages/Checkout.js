import React, {useState, useEffect} from 'react';
import '../App.css';
import StripeCheckout from "react-stripe-checkout";
import Test from "../Components/Test"
import {Link} from "react-router-dom";
import Proceed from "../Components/Proceed"

function Checkout(props) {

  const [item, setItem] = useState([])

    useEffect(() => {
        async function getItems() {
            let response = await fetch('http://localhost:3000/item/get')
            response = await response.json()
            setItem(response)
        }
        getItems()
    }, [])

  const amount = props.location.state.amount
  const totalG = props.location.state.total
  const calculateTotal = () => {
    var res = 0;
    for (var i = 0; i < Object.keys(amount).length; i++) {
        res += amount[i];
    }
    return res;
  }

  const [total, setTotal] = useState({
    name: "Groceries",
    price: calculateTotal(),
    productBy: "puzzl"
  })

  const makePayment = token => {
    const body = {
      token,
      total
    }
    const header = {
      "Content-Type": "application/json"
    }
    return fetch(`http://localhost:3000/payment`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(body)
    }).then(response => {
      console.log(response)
      const {status} = response
      console.log(status)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
        <Test amount={amount} item={item}></Test>
        <StripeCheckout
          stripeKey="pk_test_51I1il1GwVI7nrqUdCZJfkKL3dqloMorO9n9EKHXNSivEgAwsQ2K4MQbaxFjGCQx7w9zyTn5w79VJOhtNd18VNZfA00sAB1unmD"
          token={makePayment}
          name="Complete Payment"
          amount={calculateTotal() * 100}
        ></StripeCheckout>
        <Link to={{pathname: "/"}}>
        <Proceed text="Return to Store"></Proceed>
        </Link>

    </div>
  );
}

export default Checkout;
