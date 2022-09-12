import React from 'react';

const Quote = () => (
  <>
    <nav className="nav-container">
      <h1>Math Magicians</h1>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Calculator</a>
        </li>
        <li>
          <a href="#">Quote</a>
        </li>
      </ul>
    </nav>
    <main className="quote-content">
      <h4>
        Mathematics as an expression of the human mind reflects the active
        will, the contemplative reason, and the desire for aesthetic
        perfection. Its basic elements are logic and intuition, analysis and
        construction, generality and individuality.
      </h4>
    </main>
  </>
);

export default Quote;
