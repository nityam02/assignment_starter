
import React from "react";

import {headingName} from "constants/constants"
import "./Header.scss"

export default function Header(props) {
  return (
    <>
      <div className="header-container content-holder" role="Heading" aria-label="Primary">
        <div className="header-container__data">
        <div className="header-container__data__text">{headingName}</div>
        </div>
      </div>
    </>
  );
}
