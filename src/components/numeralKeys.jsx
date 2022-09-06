import React, { Component } from "react";

class NumeralKeys extends Component {
  state = {};
  render() {
    return (
      <div className="numerals">
        <button className="btn btn-numerals">7</button>
        <button className="btn btn-numerals">8</button>
        <button className="btn btn-numerals">9</button>
        <button className="btn btn-numerals">4</button>
        <button className="btn btn-numerals">5</button>
        <button className="btn btn-numerals">6</button>
        <button className="btn btn-numerals">1</button>
        <button className="btn btn-numerals">2</button>
        <button className="btn btn-numerals">3</button>
        <button className="btn btn-numerals col-span-2">0</button>
        <button className="btn btn-numerals">.</button>
      </div>
    );
  }
}

export default NumeralKeys;
