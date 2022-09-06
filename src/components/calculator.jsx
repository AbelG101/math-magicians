import React, { Component } from 'react';
import NumericKeys from './numericKeys';
import OperatorKeys from './operatorKeys';
import OutputScreen from './outputScreen';

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
