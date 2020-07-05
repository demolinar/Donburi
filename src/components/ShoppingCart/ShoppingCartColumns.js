import React  from "react";

function ShoppingCartColumns () {
        return(
            <div className="container-fluid text-center d-none d-lg-block mt-lg-5">
                <div className="row">

                    <div className="col-10 mx-auto col-lg-2">
                        <p> Products </p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p> Name </p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p> Price </p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p> Quantity </p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p> Remove </p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p> Total </p>
                    </div>
                </div>
            </div>
        );
}
export default ShoppingCartColumns;