import { React } from 'react';

const OperatorKeys = ({ handleEvent }) => (
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

export default OperatorKeys;
