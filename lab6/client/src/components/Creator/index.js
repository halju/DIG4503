import React from "react";

class Creator extends React.Component {
  clicker2(event) {
    event.preventDefault();
    let element2 = document.querySelector("#pokemonName");
    fetch("/name/" + element2.value).then((res) => {
        return res.json();
    }).then((processed) => {
        let reporting2 = document.querySelector("#reportingArea");
        if(processed.error) {
            reporting2.innerHTML = processed.error;
        } else {
            reporting2.innerHTML = processed.name;
        }
    });
}
  render() {
    return (
      <div class="form">
        <form onsubmit="clicker(event2)">
            <label for="pokemonName">Pokemon ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input id="pokemonname" type="text"></input>
            <button>Submit</button>
        </form>
      </div>
    );
  } 
}

export default Creator;