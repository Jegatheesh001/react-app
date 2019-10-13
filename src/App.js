import React from 'react';
import './App.css';
import Search from './components/Search';
import Header from './components/Header';
import Cart from './components/Cart';

class App extends React.Component {

  constructor() {
    super(); 
    this.state = {
      countries: [],
      search: [],
      countryMap: {},
      cartItems: [],
      cartList: []
    };
  }

  componentDidMount() {
    fetch("https://restcountries-v1.p.rapidapi.com/region/asia", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
        "x-rapidapi-key": "f5c7f9dd75msh64bb7a2b72c4f6ep1d61b2jsnc34ce7578343"
      }
    })
    .then(response => response.json())
    .then(countries => {
      this.setState({
        countries: countries,
        search: countries
      });
      return countries;
    }).then(users => {
      let countryMap = new Map();
      this.state.countries.forEach(country => countryMap.set(country.alpha2Code, country.name));
      this.setState({countryMap});
    });;
  }

  searchHandler = (e) => {
    this.setState({
      search: this.state.countries.filter(country => country.name.toLowerCase().includes(e.target.value.toLowerCase()))
    });
  }

  cartHandler = (e) => {
    let id = e.target.id;
    if(!this.state.cartItems.includes(id)) {
      let cartItems = this.state.cartItems;
      let cartList = this.state.cartList;
      cartItems.push(id);
      cartList.push(this.state.countryMap.get(id));
      this.setState({cartItems, cartList});
    }
  }

  render() {
    return (
      <div className="App">
        <Header title="My React App" />
		<div className="content">
			<Search placeholder="Enter country name" handler={this.searchHandler} cartHandler={this.cartHandler} countries={this.state.search} />
			<Cart data={this.state.cartList} />
		</div>
      </div>)
  }
}

export default App;
