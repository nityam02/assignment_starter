import React from 'react';

//styles
import './PrimaryButton.scss';

const PrimaryButton = (props) => {
  const {className, onClick, btnText,islinkActive} = props

  return (
    <div className='primary'>
      <button className={`primary-outline primary-button flex flex-row justify-center align-center text-16 text-capitalize font-extra-bold ${className}`} onClick={islinkActive && (onClick)}>
        <span className="btn-text">{btnText}</span>
      </button>
    </div>
  );
}

export default PrimaryButton;
