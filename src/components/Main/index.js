import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Main({
  currencie,
  onClick,
  search,
  changeCurrency,
}) {
  const listCurrencies = currencie.map((element) => (<li key={element.name} name={element.name} className="main__li" onClick={() => changeCurrency(element.name)}> {element.name}</li>));

  const handleOnChange = (event) => {
    search(event.target.value);
  };

  return (
    <main className="main">
      <input type="text" placeholder="Search for a currency" className="main__search" onChange={handleOnChange} />
      <ul
        className="main__listCurrencies"
      >
        {listCurrencies}
      </ul>
    </main>
  );
}

Main.propTypes = {
  currencie: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  changeCurrency: PropTypes.func.isRequired,
};

export default Main;
