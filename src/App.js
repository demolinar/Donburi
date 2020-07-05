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
import Search from "./components/Search";
import HashTable from "./components/DataStructures/HashTable";
import Register from "./components/Register";

function App() {
  return (
      <React.Fragment>
          <Navbar/>
          <ProductPreview/>
          <Switch>
            <Route exact path='/' component={ProductArrayList}/>
            <Route exact path='/' component={HashTable}/>
            <Route path='/details' component={Details}/>
            <Route exact path='/register' component={Register}/>
            <Route path='/product-linked-list' component={ProductLinkedList}/>
            <Route path='/product-tree' component={ProductTree}/>
            <Route path='/shopping-cart' component={ShoppingCart}/>
            <Route path='/results' component={Search}/>
            <Route component={Default}/>
          </Switch>

      </React.Fragment>
  );
}

export default App;
