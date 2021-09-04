import React from "react";

import "./Cart.scss";

function Cart(props) {
    return (
        <div className="component-cart-details">
            <h1 className="text-16 text-center">Shopping Cart</h1>
            <div
                className="select-none text-12  text-main flex justify-between mt-12 mb-12">Shoes
                        <div className="text-12 font-600 text-light">NOK 500
             </div>
             </div>
             <div
                className="select-none text-12  text-main flex justify-between mt-12 mb-12">Rust
                        <div className="text-12 font-600 text-light">NOK 500
             </div>
                
            </div>
          </div>
    )

}

export default Cart;
