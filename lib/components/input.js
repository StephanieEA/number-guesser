import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <section>
        <input placeholder='Enter a guess'
          type='number'
          className='inputGuess'
          onChange={ e => this.props.handleGuess(e) }
          value={ this.props.guess }
        />
        <section >
        From
        <input placeholder='Enter min'
          type='number'
          className='range'
          onChange={ e => this.props.handleMin(e) }
          value={this.props.min}
        />To
        <input placeholder='Enter max'
               type='number'
               className='range'
               onChange={ e => this.props.handleMax(e) }
               value={ this.props.max}
          />
        </section>
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
