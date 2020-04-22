import React, {Component} from "react";
import logo from "../logo.svg";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

class Navbar extends Component{
    render() {
        return(
            <body data-spy="scroll" data-target="#navbarResponsive">
            <div id="navbar">
                <nav className="navbar navbar-expand-md navbar-dark bg-custom px-sm-3">
                    <Link to='/'>
                        <a className="navbar-brand" href="/"><img src={logo} alt="logo"/></a>
                    </Link>

                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>

                    <div className="collapse navbar-collapse" id="navbarResponsive"/>

                    <Link to='shopping-car'>
                        <button className="btn btn-outline-success my-2 my-sm-0">
                            <span>
                                <i className="glyphicon glyphicon-shopping-cart" aria-hidden='true'></i>
                            </span>Shopping Car
                        </button>
                    </Link>

                </nav>
            </div>
            </body>
        );
    }
}
export default Navbar;