import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from "../Title";
import ShoppingCartColumns from "./ShoppingCartColumns";
import EmptyCart from "./EmptyCart";
import {ProductConsumer} from "../../Context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

class ShoppingCart extends Component{
    render() {
        return(
            <section className="mt-lg-5 p-lg-5">
                <ProductConsumer>
                    {value => {
                        const {shoppingCart} = value;
                        if(shoppingCart.heap.length > 0){
                            return (
                                <React.Fragment>
                                    <Title title="Your Shopping Cart"/>
                                    <ShoppingCartColumns/>
                                    <CartList value={value}/>
                                    <CartTotal value={value}/>
                                </React.Fragment>
                            );
                        } else {
                            return (
                                <EmptyCart/>
                            );
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}
export default ShoppingCart;