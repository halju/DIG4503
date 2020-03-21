class Home extends React.Component {

  getName() {
    let name = document.querySelector("#nameInput");
    fetch("/api/pokemon/name/" + name.value)
    .then((res) => { return res.json(); } )
    .then((processed) => {
      let resultElement = document.querySelector("#results");
      if(processed.error) {
        resultElement.innerHTML = "Could not find this pokemon!";
      } else {
        resultElement.innerHTML = "This pokemon's ID is " + processed.id;
      }
    });
  }

  getId() {
      let id = document.querySelector("idInput");
      fetch("/api/pokemon/id/" + id.value)
      .then((res) => { return res.json(); } )
      .then((processed) => {
        let resultElement = document.querySelector("#results2");
        if(processed.error) {
          resultElement.innerHTML = "Could not find this pokemon!";
        } else {
          resultElement.innerHTML = "This pokemon's name is " + processed.name;
        }
      });
    }

  render() {
    return (
      <div>
      <input type="text" id="nameInput" />
      <button onClick={() => { this.getName() } }>Search</button>
      <div id="results"></div>
      <input type="text" id="idInput" />
      <button onClick={() => { this.getId() } }>Search</button>
      <div id="results2"></div>
    </div>
    );
  }
}

export default Home;