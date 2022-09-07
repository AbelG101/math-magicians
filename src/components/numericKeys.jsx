import React, { Component } from 'react';

class NumericKeys extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    const { handleEvent } = this.props;
    return (
      <div type="button" className="numerals">
        <button onClick={handleEvent} type="button" className="btn btn-numerals">7</button>
        <button onClick={handleEvent} type="button" className="btn btn-numerals">8</button>
        <button onClick={handleEvent} type="button" className="btn btn-numerals">9</button>
        <button onClick={handleEvent} type="button" className="btn btn-numerals">4</button>
        <button onClick={handleEvent} type="button" className="btn btn-numerals">5</button>
        <button onClick={handleEvent} type="button" className="btn btn-numerals">6</button>
        <button onClick={handleEvent} type="button" className="btn btn-numerals">1</button>
        <button onClick={handleEvent} type="button" className="btn btn-numerals">2</button>
        <button onClick={handleEvent} type="button" className="btn btn-numerals">3</button>
        <button onClick={handleEvent} type="button" className="btn btn-numerals col-span-2">0</button>
        <button onClick={handleEvent} type="button" className="btn btn-numerals">.</button>
      </div>
    );
  }
}

export default NumericKeys;
