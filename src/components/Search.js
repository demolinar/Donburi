import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from "./Title";
import {ProductConsumer} from "../Context";
import ReactProduct from "./ReactProduct";
import EmptySearch from "./EmptySearch";

class Search extends Component{
    render() {
        return(
            <div className="py mt-lg-5 p-lg-5">
                <div className="container">
                    <Title title="Results"/>
                    <React.Fragment>
                        <div className="row">
                            <ProductConsumer>
                                { value => {
                                        const {searchResults} = value;
                                        if (searchResults.length > 0){
                                            return value.searchResults.map(product => {
                                                return <ReactProduct key={product.productName} product={product}/>
                                                }
                                            );
                                        } else {
                                            return (
                                                <EmptySearch/>
                                            );
                                        }
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

export default Search;