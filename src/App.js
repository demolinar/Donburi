import React from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import ProductArrayList from "./components/ProductArrayList";
import ProductLinkedList from "./components/ProductLinkedList";
import ProductTree from "./components/ProductTree";
import ShoppingCart from "./components/ShoppingCart";
import Default from "./components/Default";
import ProductPreview from "./components/ProductPreview";


function App() {
  return (
      <React.Fragment>
          <Navbar/>
          <ProductPreview/>
          <Switch>
            <Route exact path='/' component={ProductArrayList}/>
            <Route path='/details' component={Details}/>
            <Route path='/product-linked-list' component={ProductLinkedList}/>
            <Route path='product-tree' component={ProductTree}/>
            <Route path='/shopping-cart' component={ShoppingCart}/>
            <Route component={Default}/>
          </Switch>
      </React.Fragment>
  );
}

export default App;
