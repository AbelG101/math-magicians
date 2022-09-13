import './App.css';

import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';
import NotMatch from './pages/NotMatch';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/math-magicians" element={<Home />} />
          <Route path="/math-magicians/calculator" element={<Calculator />} />
          <Route path="/math-magicians/quote" element={<Quote />} />
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </>
    );
  }
}

export default App;
