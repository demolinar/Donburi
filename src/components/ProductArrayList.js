import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProductConsumer} from "../Context";
import ReactProduct from "./ReactProduct";
import Title from "./Title";

class ProductArrayList extends Component{

    render() {
        return(
            <div className="py">
                <div className="container">
                    <Title title="Products"/>
                    <React.Fragment>
                        <div className="row">
                            <ProductConsumer>
                                {
                                    value =>{
                                        return value.products.output(product =>{
                                                return <ReactProduct key={product.productName} product={product} />
                                            }
                                        )
                                    }
                                }
                            </ProductConsumer>
                        </div>
                    </React.Fragment>
                </div>
            </div>
        );
    }

}

export default ProductArrayList;

