import React from 'react';
import IdSearch from "./components/IdSearch";
import NameSearch from "./components/NameSearch";
import './App.css';

function App() {
  return (
    <div>
      <div className="form"><h1>Pokemon Database</h1></div>
      <IdSearch />
      <NameSearch />
      <div className="form"><h2>Reporting</h2></div>
      <div id="reportingArea"></div>
    </div>
  );
}

export default App;
