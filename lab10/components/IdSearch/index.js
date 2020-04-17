import SearchResult from '../SearchResult';

class IdSearch extends React.Component {

    constructor (props) {
        super (props);

        this.state = {
            searchValue: "",
            result: []
        };
    }

    changeHandler(value) {
        this.setState(
            {
                searchValue: value
            }
        );
    }

    async clickHandler() {

      let searchValue = this.state.searchValue;

      if(searchValue === "") {
        searchValue = '~';
      }

      let response = await fetch('/api/pokemon/id/' + searchValue);
      let processed = await response.json();
      
      this.setState({result: processed});
    }
    
    render () {
      return (
        <div>
          <p>Search for ID</p>
          <input
            type="text"
            onChange={(event) => { this.changeHandler(event.target.value); } } />
          <button onClick={ () => { this.clickHandler() } }>Search</button>
          {
              this.state.result.map((pokemon, index) => {
                return (
                  <SearchResult pokemon={pokemon} number={index} />
                )
              })
            }
        </div>
      );
    }
}
  
export default IdSearch;