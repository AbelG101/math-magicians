import React, { Component } from 'react';

class OutputScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="output-screen-container">
        <input className="output-screen" type="text" />
      </div>
    );
  }
}

export default OutputScreen;
