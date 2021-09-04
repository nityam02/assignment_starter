import React from "react";

import "./Search.scss"

function Search(props) {
  return (
    <div className="component-search self-center">
      <input type="search" className="input-search" onChange={props.handleOnChange} placeholder="Search" />
    </div>
  )
}

export default Search;
