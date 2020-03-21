import React from "react";

class IdSearch extends React.Component {
  IdSearch(event) {
    event.preventDefault();
    let element = document.querySelector("#pokemonId");
    fetch("/api/pokemon/id/" + element.value).then((res) => {
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
        <form onSubmit={this.IdSearch}>
          <label htmlFor="pokemonId">Pokemon ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input id="pokemonId" type="text" />&nbsp;
          <button>Submit</button>
        </form>
      </div>
    );
  } 
}

export default IdSearch;