import React from "react";

class TypeSearch extends React.Component {
  TypeSearch() {
    let name = document.querySelector("#pokemonType");
    fetch("/api/pokemon/type/" + name.value)
    .then((res) => { return res.json(); } )
    .then((processed) => {
        let resultElement = document.querySelector("#results3");
        if(processed.error) {
          resultElement.innerHTML = "Could not find!";
        } else {
          resultElement.innerHTML = processed.name;
        }
    });
  }
  render() {
    return (
      <div>
        Pokemon Type: <input type="text" id="pokemonType" />
        <button onClick={() => { this.TypeSearch() } }>search</button>
        <div id="results3"></div>
      </div>
    );
  } 
}

export default TypeSearch;