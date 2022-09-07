import React, { Component } from 'react';
import NumericKeys from './NumericKeys';
import OperatorKeys from './OperatorKeys';
import OutputScreen from './OutputScreen';

class Calculator extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return (
      <div className="calculator">
        <OutputScreen />
        <OperatorKeys />
        <NumericKeys />
      </div>
    );
  }
}

export default Calculator;
