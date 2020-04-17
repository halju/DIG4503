import React from "react";

class NameSearch extends React.Component {
  NameSearch() {
    let name = document.querySelector("#pokemonName");
    fetch("/api/pokemon/name/" + name.value)
    .then((res) => { return res.json(); } )
    .then((processed) => {
        let resultElement = document.querySelector("#results");
        if(processed.error) {
          resultElement.innerHTML = "Could not find!";
        } else {
          resultElement.innerHTML = "This pokemon's ID is " + processed.id;
        }
    });
}
  render() {
    return (
      <div>
        Pokemon Name: <input type="text" id="pokemonName" />
        <button onClick={() => { this.NameSearch() } }>search</button>
        <div id="results"></div>
      </div>
    );
  } 
}

export default NameSearch;