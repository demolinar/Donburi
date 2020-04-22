import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/Navbar";
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
            <Route path='/product-list' component={ProductLinkedList}/>
            <Route path='/shopping-car' component={ShoppingCar}/>
            <Route component={Default}/>
          </Switch>
      </React.Fragment>
  );
}

export default App;
