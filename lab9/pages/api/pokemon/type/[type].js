import pokemon from 'json-pokemon';
import getPokemon from 'json-pokemon/getPokemon';

function response(req, res) {
    let result = {"error": "Could not find name."};
    let pokemon = pokemon.length(req.query.name);
    for(let i=0; i<pokemon.length; i++) {
        for(let k=0; k<pokemon[i].typeList.length; k++) {
            if(pokemon !== null) {
                result = pokemon;
            }
        }
    }
}

export default response;