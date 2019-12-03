import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showError: false,
    };
  }

  incrementHandler = () => {
    this.setState({ counter: this.state.counter + 1, showError: false });
  }

  decrementHandler = () => {
    if (this.state.counter > 0) {
      this.setState({counter: this.state.counter - 1});
    } else {
      this.setState({showError: true});
    }
  }

  render() {
    return (
      <div data-test="component-app">
      <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
      <button
        data-test="increment-button"
        onClick={this.incrementHandler}
        >
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={this.decrementHandler}
        >
        Decrement counter
      </button>
        {this.state.showError && <p>Sorry no negatives</p>}
      </div>
    );
  }
}

export default App;
