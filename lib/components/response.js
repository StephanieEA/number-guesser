import React, { Component } from 'react';

export default class Response extends Component {
  constructor(props) {
    super(props);
    this.state = { response: <section></section> };
  }


  render() {
    return (
      <section>{this.props.response}yo</section>
    );
  }
}
