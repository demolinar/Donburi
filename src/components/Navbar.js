import React, {Component} from "react";
import logo from "../logo.svg";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import {ProductConsumer} from "../Context";

class Navbar extends Component{

    render() {
        return(
            <div data-spy="scroll" data-target="#navbarResponsive">
                <div id="navbar">
                    <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-custom px-sm-3">
                        <Link to='/'>
                            <span className="navbar-brand"><img src={logo} alt="logo"/></span>
                        </Link>

                        <ProductConsumer>
                            {value => (
                                <form className="form-inline">
                                    <input id="searchbar" className="form-control mr-sm-2"
                                           type="search" placeholder="Search"
                                           aria-label="Search"
                                           value={value.searchString}
                                           onInput={e => {
                                               value.setSearch(e);
                                           }}
                                    />

                                    <Link to='results'>
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                                        onClick={() => {
                                            value.search()
                                            value.clearSearch()
                                        }}>Search
                                        </button>
                                    </Link>

                                </form>
                            )}
                        </ProductConsumer>

                        <div className="collapse navbar-collapse" id="navbarResponsive"/>

                        <Link to='register'>
                            <button className="btn btn-outline-success my-2 my-sm-0 mr-2" type="submit">Sign Up
                            </button>
                        </Link>

                        <Link to='shopping-cart'>
                            <button className="btn btn-outline-success my-2 my-sm-0">
                                <ShoppingCart className="mr-2"></ShoppingCart>
                                Shopping Cart
                            </button>
                        </Link>

                    </nav>
                </div>
            </div>
        );
    }
}
export default Navbar;