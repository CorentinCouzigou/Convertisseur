import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Header ({setBaseAmount}) {

  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <form className="header__form" onSubmit={setBaseAmount}>
      <label>Amount in euro: 
      <input type="number" className="header__input" min={0} step="0.01" name="userValue"></input>
      </label>
      <button type="submit" className="header__button">Validate</button>
      </form>
      </header>
  )
}

Header.prototypes = {
  setBaseAmount: PropTypes.func.isRequired,
}

export default Header;
