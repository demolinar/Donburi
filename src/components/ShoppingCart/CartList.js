import React  from "react";
import CartItem from "./CartItem";


function CartList ({value}) {
    const {shoppingCart} = value;

    return(
        <div className="container-fluid">
            {shoppingCart.heap.map(item =>{
                return <CartItem key={item.productName} item={item[0]} value={value}/>
            })}
        </div>
    );
}
export default CartList;