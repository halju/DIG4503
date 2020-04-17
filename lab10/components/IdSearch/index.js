import SearchResult from '../SearchResult';
import styles from '../pageCSS/pageCSS.module.css'

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
          <p className={styles.subhead}>Search by ID</p>
          <p className={styles.align}><input
            type="text"
            onChange={(event) => { this.changeHandler(event.target.value); } } />
          <button onClick={ () => { this.clickHandler() } }>Search</button></p>
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