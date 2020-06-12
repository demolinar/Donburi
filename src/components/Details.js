import React, {Component} from "react";
import {ProductConsumer} from "../Context";
import './Navbar.css';

class Details extends Component{
    render() {
        return(
          <ProductConsumer>
              {value => {
                  const {productName, productCode, productPrice, img, inCart, details} = value.productDetails;
                  return(
                      <div className="container py-5">

                          {/*title*/}
                          <div className="row">
                            <div className="col-10 mx-auto text-center my-5">
                                <h1>{productName}</h1>
                            </div>
                          </div>

                          {/*product details*/}
                          <div className="row">
                              <div className="col-10 mx-auto col-md-6 my-3">
                                  <img src={img} className="img-fluid" alt="img"></img>
                              </div>
                              <div className="col-10 mx-auto col-md-6 my-3">
                                  <h5 className="font-italic mb-0">
                                      <strong>
                                          Price: <span>$</span> {productPrice}
                                      </strong>
                                  </h5>
                                  <h6 className="text-muted mt-3 mb-4"> Code: {productCode} </h6>
                                  <p className="mt-5 mb-0"> Details: </p>
                                  <p className="text-muted mt-1"> {details} </p>

                                  <button className="btn btn-outline-success my-2 my-sm-0"
                                          disabled={inCart ? true:false}
                                          onClick={() => {
                                              value.addToCart(productName);
                                              value.openProductPreview(productName);
                                          }}
                                  >
                                      {inCart ? "In cart" : "Add to shopping cart"}
                                  </button>
                              </div>
                          </div>

                      </div>
                  );
              }}
          </ProductConsumer>
        );
    }
}

export default Details;