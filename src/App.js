import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <HomeScreen />
      </BrowserRouter>
    );
  }
}

export default App;
