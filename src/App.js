import React from 'react';
import './App.css';
import Search from './components/Search';
import Header from './components/Header';
import Cart from './components/Cart';

class App extends React.Component {

  constructor() {
    super(); 
    this.state = {
      users: [],
      search: [],
      userMap: {},
      cartItems: [],
      cartList: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      this.setState({
        users: users,
        search: users
      });
      return users;
    }).then(users => {
      let userMap = new Map();
      this.state.users.forEach(user => userMap.set(user.id, user.name));
      this.setState({userMap});
    });
  }

  searchHandler = (e) => {
    this.setState({
      search: this.state.users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()))
    });
  }

  cartHandler = (e) => {
    let id = e.target.id;
    if(!this.state.cartItems.includes(id)) {
      let cartItems = this.state.cartItems;
      let cartList = this.state.cartList;
      cartItems.push(id);
      cartList.push(this.state.userMap.get(id));
      this.setState({cartItems, cartList});
    }
  }

  render() {
    return (
      <div className="App">
        <Header title="My React App" />
        <Search handler={this.searchHandler} cartHandler={this.cartHandler} users={this.state.search} />
        <Cart data={this.state.cartList} />
      </div>)
  }
}

export default App;
