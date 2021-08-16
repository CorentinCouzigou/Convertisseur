import React from 'react';
import PropTypes from 'prop-types';

import "./style.scss";



function Main({ currencie, onClick, search}) {


  const listCurrencies = currencie.map((element) => {
    return (<li key={element.name} name={element.name} className="main__li" onClick={onClick}> {element.name}</li>)
  });

  const handleOnChange = (event) => {
   search(event.target.value);
  };

  return (
    <main className="main">
      <input type="text" placeholder="Search for a currency" className="main__search"  onChange={handleOnChange}/>
      <ul
        className="main__listCurrencies">
        {listCurrencies}
      </ul>
    </main>
  )
}

Main.propTypes = {
  currencie: PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string.isRequired,
  })).isRequired,
  onClick:PropTypes.func.isRequired,

};


export default Main;
