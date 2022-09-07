import React, { Component } from 'react';
import NumericKeys from './numericKeys';
import OperatorKeys from './operatorKeys';
import OutputScreen from './outputScreen';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleEvent = (event) => {
    const btn = event.target.textContent;
    const obj = calculate(this.state, btn);
    this.setState(obj);
  }

  render() {
    return (
      <div className="calculator">
        <OutputScreen state={this.state} />
        <OperatorKeys handleEvent={this.handleEvent} />
        <NumericKeys handleEvent={this.handleEvent} />
      </div>
    );
  }
}

export default Calculator;
