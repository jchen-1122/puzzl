import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from "./App";
import Checkout from "./Pages/Checkout";
import Form from "./Pages/Form"
import reportWebVitals from './reportWebVitals';


const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
   <Switch>
    <Route exact path="/" component={App} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/form" component={Form} />
  </Switch>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
