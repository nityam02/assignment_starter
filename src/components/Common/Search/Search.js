import React from "react";

import "./Search.scss"

function Search(props) {
  return (
    <div className="component-search self-center" role="search" aria-label="Searching of Products">
      <input type="search" className="input-search" onChange={props.handleOnChange} placeholder="Search" />
    </div>
  )
}

export default Search;
