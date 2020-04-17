import styles from '../pageCSS/pageCSS.module.css'

function SearchResult(props) {
    return (
        <div key={props.number} className={styles.container}>
            <div className={styles.search}><strong>Name:</strong> {props.pokemon.name}
            <p><strong>ID:</strong> {props.pokemon.id}</p>
            <p><strong>Type(s):</strong>
                <ul> 
                {
                  props.pokemon.typeList.map((type, index) => {
                      return (
                        <li key={index}>{type}<p> </p></li>
                      )
                  })
                }
                </ul>
            </p></div>
        </div>
    );
}

export default SearchResult;