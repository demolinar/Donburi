//Clase ProductArrayList: Recibe los productos de nuestra ArrayList de productos (product_array_list)

import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProductConsumer} from "../Context";
import ReactProduct from "./ReactProduct";
import Title from "./Title";
import product_array_list from "./ProductArrayListDriver";

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
                                        console.log(product_array_list.array);
                                        return value.products.array.map(product =>{
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

