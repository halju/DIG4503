import React from "react";

class IdSearch extends React.Component {
  clicker(event) {
    event.preventDefault();
    let element = document.querySelector("#pokemonId");
    fetch("/id/" + element.value).then((res) => {
        return res.json();
    }).then((processed) => {
        let reporting = document.querySelector("#reportingArea");
        if(processed.error) {
            reporting.innerHTML = processed.error;
        } else {
            reporting.innerHTML = processed.name;
        }
    });
  }
  render() {
    return (
      <div class="form">
        <form onsubmit="clicker(event)">
            <label for="pokemonId">Pokemon ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input id="pokemonId" type="text"></input>&nbsp;
            <button>Submit</button>
        </form>
      </div>
    );
  } 
}

export default IdSearch;