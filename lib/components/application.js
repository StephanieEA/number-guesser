import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import Response from './response';
import Reset from './reset';

export default class Application extends Component {
  constructor() {
    super();
    this.initialState = { inputGuess: 'Enter a guess', lastGuess: 0 };
    this.state = this.initialState
  }

  componentDidMount() {
    this.setState(this.initialState)
  }

  handleInputGuess(e) {
    this.setState({ inputGuess: parseInt(e.target.value, 10) });
  }

  clearInput(e) {
    this.setState({ inputGuess: 0 });
  }

  generateRandom() {
    const random = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    return random;
  }

  evaluateGuess() {
    console.log('yo');
  }

  submitGuess(e) {
    this.evaluateGuess();
    this.clearInput();
    console.log('pshhhh')
  }

  resetState() {
    this.setState(this.initialState);
    console.log(this.state)
  }

  render() {
    return (
      <section>
        <header> Number Guesser </header>
        <Input value={ this.state.inputGuess }
               handle={ this.handleInputGuess.bind(this) }
               submit={ this.submitGuess.bind(this) }
               clear={ this.clearInput.bind(this) }/>
        <Response />
        <Reset reset={ this.resetState.bind(this) }/>
      </section>
    );
  }
}
