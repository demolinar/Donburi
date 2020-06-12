import React  from "react";
import DeleteIcon from '@material-ui/icons/Delete';


function CartItem({item, value}) {
    const {productName, productPrice, img, total, count} = item;
    const {addQuantity, decreaseQuantity, removeItem} = value;
    return(
        <div className="row my-5 text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width: '5rem', height: '5rem'}} className="img-fluid" alt="product"/>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none"> Product: </span>
                {productName}
            </div>

            <div className="col-10 mx-auto col-lg-2 font-italic">
                <span className="d-lg-none"> Price: </span>
                ${productPrice}
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-outline-dark mx-1" onClick={() => decreaseQuantity(productName)}> - </span>
                        <span className="btn btn-outline-dark mx-1" > {count} </span>
                        <span className="btn btn-outline-dark mx-1" onClick={() => addQuantity(productName)}> + </span>
                    </div>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                        <button className="btn btn-light mx-1" onClick={() => removeItem(productName)}>
                            <DeleteIcon/>
                        </button>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <strong> Item Total: </strong>
                ${total}
            </div>

        </div>
    );
}
export default CartItem;