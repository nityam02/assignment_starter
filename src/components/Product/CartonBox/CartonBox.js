import React from "react";
import "./CartonBox.scss";

const CartonBox = (props) => {
  const{ id,name,description,defaultImage,price,discount} =props.data
  return (
    <div className="component-carton-box">
      <div  className="product-item cursor-pointer relative select-none">
        <div className="empty-circle"></div>
         <img src={defaultImage} alt={name} className="product-img" />
      </div>
      <div className="mt-12 box-summary">
        <h3 className="text-12 text-center">{name}</h3>
        <div className="text-10 text-center">{description}</div>
      </div>
    </div>
  );
}

export default CartonBox;
