
import React from "react";

import {newsHeading} from "constants/constants"
import "./Banner.scss"

const Banner=()=> {

  return (
    <div className="hero-image">
    <div className="hero-text" role="News" aria-label="Recent News">
      <h1 className="text-main">{newsHeading}</h1>
    </div>
  </div>
    )
}

export default Banner
