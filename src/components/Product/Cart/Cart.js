import React from "react";
import PrimaryButton from "components/Common/PrimaryButton"
import "./Cart.scss";
import {cartItems} from "constants/constants"

function Cart(props) {
    return (
        <div className="component-cart-details" role="cart" aria-label="shopping cart of user">
            <h1 className="text-16 text-center">{cartItems.cartHeading}</h1>
            <div className="flex justify-between flex-col h-full">
            <div>
            {cartItems.items.map((e,index)=>(
            <div
                className="select-none text-12  text-main flex justify-between mt-12 mb-12 font-600" key={index}>{e.item}
                        <div className="text-12 font-600 text-light">{e.price}
             </div>
             </div>
            ))  
           }
            <PrimaryButton btnText={"Total"}/>
            </div>
          </div>
          </div>
    )

}

export default Cart;
