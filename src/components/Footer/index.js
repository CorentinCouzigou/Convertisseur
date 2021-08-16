import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import "./style.scss";

function Footer ({currency, value}){
return (
  <footer className="footer">
    <CountUp className="footer__result" decimals= {2} durant={0.4} end={value}/>
    <h3 className="footer__deviceName">{currency}</h3>
    </footer>
)

}

Footer.propTypes = {
  currency:PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}
export default Footer;
