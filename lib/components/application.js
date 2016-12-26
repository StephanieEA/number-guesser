import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import Response from './response';
import Reset from './reset';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      inputGuess: 0,
      lastGuess: 0,
    };
  }

  generateRandom() {
    Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  }

  render() {
    return (
      <section>
        <header> Number Guesser </header>
        <Input />
        <Response />
        <Reset />
      </section>
    );
  }
}
