import pokemon from 'json-pokemon';

function response(req, res) {
    let result = [];
    const type = req.query.type;
    pokemon.forEach((pokemonObject) => {
      pokemonObject.typeList.forEach((typeProperty) => {
        if(type === typeProperty) {
          result.push(pokemonObject);
        }
      });
    });
    res.json(result);
}

export default response;
