import React, { Component } from 'react';

export default class Response extends Component {

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
      this.increaseRange();
      this.reguess = true;
    }
    this.setState({ response: display });
  }

  render() {
    return (
      <section>{this.props.response}</section>
    );
  }
}
