
import React from "react";

import "./Header.scss"

export default function Header(props) {
  return (
    <>
      <div className="header-container content-holder" role="Heading" aria-label="Primary">
        <div className="header-container__data">
        <div className="header-container__data__text">Smart Hardware Shop</div>
        </div>
      </div>
    </>
  );
}
