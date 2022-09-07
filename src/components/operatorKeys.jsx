import React, { Component } from 'react';

class OperatorKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleEvent } = this.props;
    return (
      <>
        <button onClick={handleEvent} type="button" className="btn btn-top">AC</button>
        <button onClick={handleEvent} type="button" className="btn btn-top">+/-</button>
        <button onClick={handleEvent} type="button" className="btn btn-top">%</button>
        <button onClick={handleEvent} type="button" className="btn btn-side">÷</button>
        <button onClick={handleEvent} type="button" className="btn btn-side">x</button>
        <button onClick={handleEvent} type="button" className="btn btn-side">-</button>
        <button onClick={handleEvent} type="button" className="btn btn-side">+</button>
        <button onClick={handleEvent} type="button" className="btn btn-side">=</button>
      </>
    );
  }
}

export default OperatorKeys;
