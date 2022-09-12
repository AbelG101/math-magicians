import React, { useState } from 'react';
import NumericKeys from './numericKeys';
import OperatorKeys from './operatorKeys';
import OutputScreen from './outputScreen';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculator, setCalculator] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleEvent = (event) => {
    const btn = event.target.textContent;
    const obj = calculate(calculator, btn);
    setCalculator(obj);
  };

  return (
    <main className="calculator-container">
      <header>
        <h2>Lets do some math!</h2>
      </header>
      <div className="calculator">
        <OutputScreen state={calculator} />
        <OperatorKeys handleEvent={handleEvent} />
        <NumericKeys handleEvent={handleEvent} />
      </div>
    </main>
  );
};

export default Calculator;
