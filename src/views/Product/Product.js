
import React, { useEffect, useState,useRef } from "react";

import LayoutHoc from "components/Common/LayoutHoc";
import Banner from "components/Product/Banner"
import CartonBox from "components/Product/CartonBox";
import Cart from "components/Product/Cart"
import Search from "components/Common/Search"

import {getProducts,getProductsByQuery } from "services/Product";
import { debounce } from "utilities/helper";

import "./Product.scss"


var pageNumber=0;
const Product=()=> {

  const [isLoading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    loadHelpDocuments();
  }, []);

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          pageNumber++;
          loadHelpDocuments();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  async function loadHelpDocuments() {
      try {
          setLoading(true);
          const data = await getProducts(pageNumber);
          setProductList(prev => ([...prev, ...data]));
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
}

async function handleProductSearch(e) {
  const userInput = e.target.value;
  const fn = debounce(async userInput => {
  const data=await getProductsByQuery(userInput);
    setProductList(data);
  }, 500);
  fn(userInput);  
};


  return (
   <div className="view-product content-holder">
    <div className="flex flex-col w-full mr-20">
        <Banner/>
        <Search handleOnChange={handleProductSearch}/>
        <div className="flex mt-20 flex-wrap align-baseline">
          {productList.map((productItem, index) => (
                    <CartonBox
                      data={productItem}
                      key={index}
                    />
                  ))}
          </div>
        <div className="Section-item" ref={ref} id="secondItem"></div>
    </div> 
     <Cart/>
   </div>
    )
}

export default LayoutHoc(Product)
