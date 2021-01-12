import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AboutUser from './AboutUser';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";
import asyncReducer from "./Reducer"; 
import thunk from "redux-thunk";

import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';

const store = createStore(asyncReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
   <Router >
      
     <Switch>
     <Route path = "/users/page2/:id" component = {AboutUser} />
      <Route path = "/" component = {App}/>
     </Switch>
   </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
