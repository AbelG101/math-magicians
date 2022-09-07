import './App.css';

import React, { Component } from 'react';
// eslint-disable-next-line import/extensions
import Calculator from './components/Calculator.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return (
      <div className="calculator-container">
        <Calculator />
      </div>
    );
  }
}

export default App;
