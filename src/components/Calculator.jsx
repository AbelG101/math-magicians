import React, { Component } from "react";
import NumeralKeys from "./numeralKeys";
import OperationKeys from "./operationKeys";
import OutputScreen from "./outputScreen";

class Calculator extends Component {
  state = {};
  render() {
    return (
      <div className="calculator">
        <OutputScreen />
        <OperationKeys />
        <NumeralKeys />
      </div>
    );
  }
}

export default Calculator;
