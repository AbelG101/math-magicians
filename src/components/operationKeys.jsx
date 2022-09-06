import React, { Component } from "react";

class OperationKeys extends Component {
  state = {};
  render() {
    return (
      <>
        <button className="btn btn-top">AC</button>
        <button className="btn btn-top">+/-</button>
        <button className="btn btn-top">%</button>
        <button className="btn btn-side">/</button>
        <button className="btn btn-side">x</button>
        <button className="btn btn-side">-</button>
        <button className="btn btn-side">+</button>
        <button className="btn btn-side">=</button>
      </>
    );
  }
}

export default OperationKeys;
