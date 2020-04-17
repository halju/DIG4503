import React from "react";

class IdSearch extends React.Component {
  IdSearch() {
    let name = document.querySelector("#pokemonId");
    fetch("/api/pokemon/id/" + name.value)
    .then((res) => { return res.json(); } )
    .then((processed) => {
        let resultElement = document.querySelector("#results2");
        if(processed.error) {
          resultElement.innerHTML = "Could not find!";
        } else {
          resultElement.innerHTML = "This pokemon's name is " + processed.name;
        }
    });
  }
  render() {
    return (
      <div>
        Pokemon ID: <input type="text" id="pokemonId" />
        <button onClick={() => { this.IdSearch() } }>search</button>
        <div id="results2"></div>
      </div>
    );
  } 
}

export default IdSearch;