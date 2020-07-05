import React  from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function CartTotal ({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
                        <Link to="/">
                            <button className="btn-danger mb-3 px-5" type="button" onClick={() => clearCart()}> Clear Cart</button>
                        </Link>

                        <h5>
                            <span> Subtotal: </span>
                            <strong> ${cartSubTotal}</strong>
                        </h5>

                        <h5>
                            <span> Tax: </span>
                            <strong> ${cartTax}</strong>
                        </h5>

                        <h5>
                            <span> Total: </span>
                            <strong> ${cartTotal}</strong>
                        </h5>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default CartTotal;