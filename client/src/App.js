import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: ""};
  }

  callApi() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => {
        console.log(res);
        this.setState({
        apiResponse: res
      })
    })
    .catch(error => console.log('Error while connecting - ' + error));
  }

  componentWillMount() {
    this.callApi();
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.apiResponse}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )};
}

export default App;
