import React, {Component} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import {ProductConsumer} from "../Context";
import Title from "./Title";

class Register extends Component{
    render() {
        return(
            <div className="py mt-lg-5 p-lg-5">
                <div className="container">
                    <Title title="Sign Up"/>
                    <ProductConsumer>
                        {value => (
                            <form className="form-inline">
                                <input id="firstname" className="form-control mr-sm-2"
                                       type="search" placeholder="First Name"
                                       aria-label="Search"
                                       value={value.firstName}
                                       onInput={e => {
                                           value.setFirstName(e);
                                       }}
                                />
                                <input id="lastname" className="form-control mr-sm-2"
                                       type="search" placeholder="Last Name"
                                       aria-label="Search"
                                       value={value.lastName}
                                       onInput={e => {
                                           value.setLastName(e);
                                       }}
                                />
                                <input id="email" className="form-control mr-sm-2"
                                       type="search" placeholder="Email"
                                       aria-label="Search"
                                       value={value.email}
                                       onInput={e => {
                                           value.setEmail(e);
                                       }}
                                />
                                <input id="password" className="form-control mr-sm-2"
                                       type="search" placeholder="Password"
                                       aria-label="Search"
                                       value={value.password}
                                       onInput={e => {
                                           value.setPassword(e);
                                       }}
                                />
                                <Link to='/'>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                                            onClick={() => {
                                                value.register();
                                            }}
                                    >Register
                                    </button>
                                </Link>
                            </form>
                        )}
                    </ProductConsumer>
                </div>
            </div>
        );
    }
}
export default Register;