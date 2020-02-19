import React from "react";

class NameReader extends React.Component {
  clicker(event) {
    event.preventDefault();
    let element = document.querySelector("#pokemonName");
    fetch("/name/" + element.value).then((res) => {
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
            <label for="pokemonName">Pokemon Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input id="pokemonName" type="text"></input>
            <button>Submit</button>
        </form>
      </div>
    );
  } 
}

export default NameReader;