import React from "react";

class NameSearch extends React.Component {
  NameSearch(event) {
    event.preventDefault();
    let element = document.querySelector("#pokemonName");
    fetch("api/pokemon/name/" + element.value).then((res) => {
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
      <div className="form">
        <form onSubmit={this.NameSearch}>
          <label htmlFor="pokemonName">Pokemon Name:&nbsp;</label>
          <input id="pokemonName" type="text" />&nbsp;
          <button>Submit</button>
        </form>
      </div>
    );
  } 
}

export default NameSearch;