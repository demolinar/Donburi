import React from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import ProductArrayList from "./components/ProductArrayList";
import ShoppingCar from "./components/ShoppingCar";
import Default from "./components/Default";
import ProductLinkedList from "./components/ProductLinkedList";

function App() {
  return (
      <React.Fragment>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={ProductArrayList}/>
            <Route path='/details' component={Details}/>
            <Route path='/product-linked-list' component={ProductLinkedList}/>
            <Route path='/shopping-car' component={ShoppingCar}/>
            <Route component={Default}/>
          </Switch>
      </React.Fragment>
  );
}

export default App;
