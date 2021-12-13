/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Header({ setBaseAmount, baseAmount }) {
  const handleBaseAmount = (event) => {
    setBaseAmount(event.target.value);
  };
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <label className="header__amount">Amount in euro:
        <input
          type="number"
          className="header__input"
          min={0}
          step="0.01"
          name="userValue"
          onChange={handleBaseAmount}
          value={baseAmount}
        />
      </label>
    </header>
  );
}

Header.prototypes = {
  setBaseAmount: PropTypes.func.isRequired,
  baseAmount: PropTypes.number.isRequired,
};

export default Header;
