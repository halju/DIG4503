import React from 'react';
import Reader from "./components/Reader";
import Creator from "./components/Creator";
import './App.css';

function App() {
  return (
    <div>
     <Reader />
     <Creator />
     <h2>Reporting</h2>
     <div id="reportingArea"></div>
    </div>
  );
}

export default App;
