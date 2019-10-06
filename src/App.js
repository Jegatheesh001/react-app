import React from 'react';
import './App.css';
import Search from './components/Search';
import Header from './components/Header';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      users: [],
      search: []
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
    });
  }

  searchHandler = (e) => {
    this.setState({
      search: this.state.users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()))
    });
  }

  render() {
    return (
      <div className="App">
        <Header title="My React App" />
        <Search handler={this.searchHandler} users={this.state.search} />
      </div>)
  }
}

export default App;
