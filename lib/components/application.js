import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import Response from './response';
import Reset from './reset';

export default class Application extends Component {
  constructor() {
    super();
    this.initialState = { inputGuess: '', max: 20, min: 0, error: '', response: '' };
    this.state = this.initialState;
    this.random = this.generateRandom(this.state.max, this.state.min);
  }

  handleMax(e) {
    this.setState({ max: parseInt(e.target.value, 10) }, () => {
      this.naNger(this.state.max);
    });
  }

  handleMin(e) {
    this.setState({ min: parseInt(e.target.value, 10) }, () => {
      this.naNger(this.state.min);
    });
  }

  handleGuess(e) {
    this.setState({ inputGuess: parseInt(e.target.value, 10) }, () => {
      this.naNger(this.state.inputGuess);
  //    this.outRange();
    });
  }

  naNger(inputValue) {
    if (isNaN(inputValue)) {
      this.setState({ error: <p> Enter a NUMBER </p> });
    } else {
      this.setState({ error: '' });
    }
  }

  outRange() {
    if (this.state.inputGuess > this.state.max || this.state.inputGuess > this.state.min) {
      this.setState({ error: <p> Out of Range </p> });
    }
  }

  clearInput() {
    this.setState({ inputGuess: '' });
  }

  generateRandom(max, min) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
  }

  submitGuess() {
    if (this.state.max !== 20 || this.state.min !== 0) {
      const adjustedRandom = this.generateRandom(this.state.max, this.state.min);
      this.random = adjustedRandom;
    }
    console.log(this.random);
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
    this.random = this.generateRandom(this.state.max, this.state.min);
  }

  render() {
    return (
      <section>
        <header> Number Guesser </header>
        <Input guess={this.state.inputGuess}
               max={this.state.max}
               min={this.state.min}
               handleMax={ this.handleMax.bind(this) }
               handleMin={ this.handleMin.bind(this) }
               handleGuess= { this.handleGuess.bind(this) }
               submit={ this.submitGuess.bind(this) }
               clear={ this.clearInput.bind(this) }/>
          {this.state.error}
        <Response response={ this.state.response }/>
        <Reset reset={ this.resetState.bind(this) }
               value={ this.state.response }/>
      </section>
    );
  }
}
