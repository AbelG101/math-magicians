import { React } from 'react';

const OutputScreen = ({ state: { total, next, operation } }) => (
  <div className="output-screen-container">
    <input value={next || operation || total || 0} readOnly className="output-screen" type="text" />
  </div>
);

export default OutputScreen;
