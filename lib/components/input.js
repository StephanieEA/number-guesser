import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <input placeholder='Enter max'
               type='number'
               onChange={ e => this.props.handleMax(e) }
               value={ this.props.max}
    />
        <input placeholder='Enter min'
                type='number'
                onChange={ e => this.props.handleMin(e) }
                value={this.props.min}
  />
        <input placeholder='Enter a guess'
               type='number'
               onChange={ e => this.props.handleGuess(e) }
               value={ this.props.guess }
    />
        <button onClick={ e => this.props.submit(e) }
                disabled={ !this.props.guess }>
          Submit
        </button>
        <button onClick={ e => this.props.clear(e) }
                disabled={ !this.props.guess }>
          Clear
        </button>
      </section>
    );
  }
}
