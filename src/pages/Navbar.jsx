import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="nav-container">
      <h1>Math Magicians</h1>
      <ul className="nav-links">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/calculator">Calculator</CustomLink>
        <CustomLink to="/quote">Quote</CustomLink>
      </ul>
    </nav>
  </>
);

const CustomLink = ({ to, children }) => {
  const isActive = useMatch({ path: useResolvedPath(to).pathname, end: true });

  return (
    <li>
      <Link className={isActive ? 'active' : ''} to={to}>{children}</Link>
    </li>
  );
};

export default Navbar;
