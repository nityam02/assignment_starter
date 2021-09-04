import React from "react";
import "./CartonBox.scss";

const CartonBox = (props) => {
  const{ id,name,description,defaultImage,price,discount} =props.data
  return (
    <div className="component-carton-box" role="productItem" aria-label="Product Item" key={id}>
      <div  className="product-item cursor-pointer relative select-none" style={{backgroundImage:`url(${defaultImage})`}}>
        <div className="empty-circle"></div>
      </div>
      <div className="mt-12 box-summary">
        <div className="text-12 text-center font-600">{name}</div>
        <div className="mt-6 mb-6 text-center">
        <del className="text-10 ">{price+discount}</del>
        <span className="text-10  ml-4 text-main">{price}</span>
        </div>  
        <div className="text-10 text-center text-ellipsis">{description}</div>
      </div>
    </div>
  );
}

export default CartonBox;
