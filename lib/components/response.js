import React, { Component } from 'react';

export default class Response extends Component {

  displayResponse() {
    let display = '';
    if (this.props.inputGuess > this.random) {
      display = <section>
        Your last guess was
        <span> {this.props.inputGuess} </span>
        That is too high
      </section>;
    } else if (this.props.inputGuess < this.random) {
      display = <section>
        Your last guess was
        <span> {this.props.inputGuess} </span>
        That is too low
      </section>;
    } else if (this.props.inputGuess === this.random) {
      display = <section>
        Your last guess was
        <span> {this.props.inputGuess} </span>
        You got it!!!
      </section>;
      this.props.increaseRange();
    }
  }


  render() {
    return (
      <section>{this.displayResponse()}</section>
    );
  }
}
