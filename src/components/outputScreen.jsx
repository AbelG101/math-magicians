import React, { Component } from 'react';

class OutputScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { state: { total, next, operation } } = this.props;
    return (
      <div className="output-screen-container">
        <input value={next || operation || total || 0} readOnly className="output-screen" type="text" />
      </div>
    );
  }
}

export default OutputScreen;
