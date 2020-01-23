import React from 'react';
import './App.css';
import HomePage from './components/HomePage';

class App extends React.Component {
  render() {
    return (
        <HomePage firstName="Hal" />
      );
  }
}

export default App;
