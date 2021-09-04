import React from "react";
import PrimaryButton from "components/Common/PrimaryButton"
import "./Cart.scss";

function Cart(props) {
    return (
        <div className="component-cart-details" role="cart" aria-label="shopping cart of user">
            <h1 className="text-16 text-center">Shopping Cart</h1>
            <div className="flex justify-between flex-col h-full">
            <div>
            <div
                className="select-none text-12  text-main flex justify-between mt-12 mb-12 font-600">Shoes
                        <div className="text-12 font-600 text-light">NOK 500
             </div>
             </div>
             <div
                className="select-none text-12  text-main flex justify-between mt-12 mb-12 font-600">Rust
                        <div className="text-12 font-600 text-light">NOK 500
             </div>
             </div>
            </div>
            <PrimaryButton btnText={"Total"}/>
            </div>
          </div>
    )

}

export default Cart;
