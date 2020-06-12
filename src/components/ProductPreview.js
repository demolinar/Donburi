import React, {Component} from "react";
import {Link} from "react-router-dom";
import {ProductConsumer} from "../Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductPreview.css';

class ProductPreview extends Component{
    render() {
        return(
            <ProductConsumer>
                {value => {
                    const {productPreviewOpen, closeProductPreview} = value;
                    const {img, productName, productPrice} = value.productPreviewModel;

                    if(!productPreviewOpen){
                        return null;
                    } else {
                        return(
                                <div id="product-container">
                                    <div className="container">
                                        <div className="row">

                                            <div id="product-preview" className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5">

                                                <h5>Item added to your Shopping Cart</h5>
                                                <img src={img} className="img-fluid" alt="product"></img>
                                                <h5> {productName} </h5>
                                                <h5 className="text-muted font-italic"> Price : $ {productPrice} </h5>

                                                <Link to="/">
                                                    <button className="btn-outline-success" onClick={() => closeProductPreview()}>
                                                        Back to Store
                                                    </button>
                                                </Link>

                                                <Link to='/shopping-cart'>
                                                    <button className="btn-outline-success" onClick={() => closeProductPreview()}>
                                                        Go to your Cart
                                                    </button>
                                                </Link>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}



export default ProductPreview;