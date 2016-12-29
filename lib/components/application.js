import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import Response from './response';
import Reset from './reset';

export default class Application extends Component {
  constructor() {
    super();
    this.initialState = { inputGuess: '', response: '' };
    this.state = this.initialState;
    this.random = this.generateRandom();
  }

  handleInputGuess(e) {
    this.setState({ inputGuess: parseInt(e.target.value, 10) }, () => {
      this.naNger();
      this.outRange();
    });
  }

  naNger() {
    if (isNaN(this.state.inputGuess)) {
      this.setState({ response: <p> Enter a NUMBER </p> });
    }
  }

  outRange() {
    if (this.state.inputGuess > 20 || this.state.inputGuess < 0) {
      this.setState({ response: <p> Guess between 1 and 20 </p> });
    }
  }

  clearInput() {
    this.setState({ inputGuess: '' });
  }

  generateRandom() {
    const random = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    return random;
   }

  submitGuess() {
    this.displayResponse();
    this.clearInput();
  }

  displayResponse() {
    let display = '';
    if (this.state.inputGuess > this.random) {
      display = <section>
        Your last guess was
        <span> {this.state.inputGuess} </span>
        That is too high
      </section>;
    } else if (this.state.inputGuess < this.random) {
      display = <section>
        Your last guess was
        <span> {this.state.inputGuess} </span>
        That is too low
      </section>;
    } else if (this.state.inputGuess === this.random) {
      display = <section>
        Your last guess was
        <span> {this.state.inputGuess} </span>
        You got it!!!
      </section>;
    }
    this.setState({ response: display });
  }

  resetState() {
    this.setState(this.initialState);
    this.random = this.generateRandom();
  }

  render() {
    return (
      <section>
        <header> Number Guesser </header>
        <Input value={ this.state.inputGuess }
               handle={ this.handleInputGuess.bind(this) }
               submit={ this.submitGuess.bind(this) }
               clear={ this.clearInput.bind(this) }/>
        <Response response={ this.state.response }/>
        <Reset reset={ this.resetState.bind(this) }
               value={ this.state.response }/>
      </section>
    );
  }
}
