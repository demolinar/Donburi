import React, {Component} from "react";
import {Link} from "react-router-dom";


class ReactProduct extends Component{
    render() {
        const {productName, productPrice, productCode} = this.props.product;
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={console.log("You've clicked")}>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReactProduct;