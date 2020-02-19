import React from 'react';
import IdSearch from "./components/IdSearch";
import NameSearch from "./components/NameSearch";
import './App.css';

function App() {
  return (
    <div>
      <div class="form"><h1>Pokemon Database</h1></div>
      <IdSearch />
      <NameSearch />
      <h2>Reporting</h2>
      <div id="reportingArea"></div>
    </div>
  );
}

export default App;
