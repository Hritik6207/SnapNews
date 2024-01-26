import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

import { Component } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={4} country="in" category="general" />} />
            <Route exact path="/Business" element={<News key="Business" pageSize={4} country="in" category="Business" />} />
            <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={4} country="in" category="Entertainment" />} />
            <Route exact path="/General" element={<News key="General" pageSize={4} country="in" category="General" />} />
            <Route exact path="/Health" element={<News key="Health" pageSize={4} country="in" category="Health" />} />
            <Route exact path="/Science" element={<News key="Science" pageSize={4} country="in" category="Science" />} />
            <Route exact path="/Sports" element={<News key="Sports" pageSize={4} country="in" category="Sports" />} />
            <Route exact path="/Technology" element={<News key="Technology" pageSize={4} country="in" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
