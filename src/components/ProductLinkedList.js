//Clase ProductLinkedList: Recibe los productos de nuestra LinkedList de productos (product_linked_list)
//Mire localhost:3000/products-linked-list para ver la página de Productos (implementada con Linked List)

import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProductConsumer} from "../Context";
import ReactProduct from "./ReactProduct";
import Title from "./Title";
import product_linked_list from "./ProgramDrivers/ProductLinkedListDriver";

class ProductArrayList extends Component{
    render() {
        return(
            <div className="py mt-lg-5 p-lg-5">
                <div className="container">
                    <Title title="Products (Linked List)"/>
                    <React.Fragment>
                        <div className="row">
                            <ProductConsumer>
                                {
                                    value =>{
                                        console.log(product_linked_list.array);
                                        return value.productsLinked.array.map(product =>{
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