import React, {useState} from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import Toggler from '../Toggler';
import listCurrencies from '../../data/currencies';
import './style.scss';


export default class App extends React.Component {
  state = {
    open: true,
    baseAmount: 0,
    currency: 'United States Dollar',
    search:'',
  };
  
  setOpen = () => {
    this.state.open ? this.setState({open:false}) : this.setState({open:true});
  };

  setBaseAmount = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    const finalData = data.get("userValue")
    this.setState({baseAmount: finalData})
    
  };

  setSearch = (value) => {
    this.setState({search:value});
  
  };

  getFilterCurrencies = () => {
    if (this.state.search.length === 0){
      return listCurrencies;
    }
    const filterCurrencies = listCurrencies.filter((element) => {
      const loweredName = element.name.toLowerCase();
      const loweredSearch = this.state.search.toLowerCase();
      return loweredName.includes(loweredSearch);
    });
    return filterCurrencies;
  };
  

  selectCurrencie = (e) =>  {
    const data = e.target;
    const finalData = data.getAttribute("name")
    this.setState({currency: finalData})
  };

  makeConversion = () => {
    const findCurrencie = listCurrencies.find((element) => {
      return element.name === this.state.currency;
    });
  
    return Math.round((findCurrencie.rate * this.state.baseAmount)*100)/ 100;
  };

  componentDidMount() {
    document.addEventListener('keyup',this.handleOnKeyUp);
  };

  handleOnKeyUp = (event) => {
    if(event.key === 'Escape'){
      this.setOpen();
    }
   };

  render() {
    let value = this.makeConversion();
       return (<div className="app">
      <Header baseAmount={this.state.baseAmount} setBaseAmount={this.setBaseAmount} />
      <Toggler text="Show currencies" onClickButton={this.setOpen} />
      {this.state.open && <Main currencie={this.getFilterCurrencies()} onClick={this.selectCurrencie} search={this.setSearch} />}
      <Footer currency={this.state.currency} value={value} />
    </div>)
  }
}




