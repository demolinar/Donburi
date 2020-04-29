//Clase que muestra cada producto en la sección de productos

import React, {Component} from "react";
import {Link} from "react-router-dom";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import './ReactProduct.css';
import PropTypes from 'prop-types';

class ReactProduct extends Component{
    render() {
        const {productName, productPrice, img, inCar} = this.props.product;
        return (
            <div id="product-wrapper" className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={()=>console.log("You've clicked me")}>

                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>

                        {/*Add to car button*/}
                        <button className="car-btn" disabled={inCar? true:false}  onClick={()=>{console.log('Added to your car');}}>
                            {inCar ? (
                                <p className="text-capitalize mb-0" disabled>
                                    {""} In Car
                                </p>
                                ):(<ShoppingCart></ShoppingCart>)
                            }
                        </button>
                    </div>

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
        productCode:PropTypes.string,
        productPrice:PropTypes.number,
        img:PropTypes.string,
        inCar:PropTypes.bool
    })
}

export default ReactProduct;