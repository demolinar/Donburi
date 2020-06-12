//Clase que muestra cada producto en la sección de productos

import React, {Component} from "react";
import {Link} from "react-router-dom";
import {ProductConsumer} from "../Context";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import './ReactProduct.css';
import PropTypes from 'prop-types';

class ReactProduct extends Component{
    render() {
        const {productName, productPrice, img, inCart} = this.props.product;
        return (
            <div id="product-wrapper" className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">

                    <ProductConsumer>
                        {value => (
                            <div className="img-container p-5" onClick={() => value.handleDetail(productName)}>

                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top"/>
                                </Link>

                                {/*Add to car button*/}
                                <button className="car-btn" disabled={inCart? true:false}  onClick={() => {
                                    value.addToCart(productName);
                                    value.openProductPreview(productName);
                                }}>
                                    {inCart ? (
                                        <p className="text-capitalize mb-0" disabled>
                                            {""} In Cart
                                        </p>
                                    ):(<ShoppingCart></ShoppingCart>)
                                    }
                                </button>

                            </div>
                        )}
                    </ProductConsumer>

                    {/*Card footer*/}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {productName}
                        </p>
                        <h5 className="font-italic mb-0">
                            <span className="mr-1">$</span>
                            {productPrice}
                        </h5>
                    </div>

                </div>
            </div>
        );
    }
}

ReactProduct.propTypes = {
    product:PropTypes.shape({
        productName:PropTypes.string,
        productCode:PropTypes.number,
        productPrice:PropTypes.number,
        img:PropTypes.string,
        inCar:PropTypes.bool,
        total:PropTypes.number,
        count:PropTypes.number
    }).isRequired
}

export default ReactProduct;