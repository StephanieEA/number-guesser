import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
  //  this.state = { changed: false };
  }

  render() {
    return (
      <section>
        <input placeholder='Enter max'
               type='number'
               onChange={ e => this.props.handleMax(e) }
        //       onChange={ e => console.log('yo')}
               value={ this.props.max}
        //       changed={this.state.changed}
    />
        <input placeholder='Enter min'
                type='number'
                onChange={ e => this.props.handleMin(e) }
                value={this.props.min}
          //      changed={this.state.changed}
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
