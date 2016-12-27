import React, { Component } from 'react';

export default class Reset extends Component {
  render() {
    return (
  <button onClick={e => this.props.reset(e)}>Reset</button>    );
  }
}
