import React, {useState, useContext, useEffect} from 'react';
import './App.css';
import List from "./Components/List";
import Proceed from "./Components/Proceed"
import {Link} from "react-router-dom";

function App(props) {

  const [item, setItem] = useState([])

    useEffect(() => {
        async function getItems() {
            let response = await fetch('http://localhost:3000/item/get')
            response = await response.json()
            setItem(response)
        }
        getItems()
    }, [])


  // 100 items in list (needs to be dynamic later)
  const initDict = () => {
    var res = {}
    for (var i = 0; i < 100; i++) {
      res[i] = 0;
    }
    return res;
  }

  const [amount, setAmount] = useState(initDict())
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
