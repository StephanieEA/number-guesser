import React, { Component } from 'react';

const Reset = ({ response, reset }) => <button onClick={e => reset(e)}
          disabled={ !response }>Reset</button>;

export default Reset;
