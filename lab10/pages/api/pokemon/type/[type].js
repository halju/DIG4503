import pokemon from 'json-pokemon';

function response(req, res) {
    let type = req.query.type;
    let results = [];
    let result = {"error": "Could not find name."};

    for(let i = 0; i < pokemon.length; i++) {
        for(let k = 0; k < pokemon[i].typeList.length; k++) {
            if (type == pokemon[i].typeList) {
                results.push(pokemon[i].typeList);
            } else if (type == null) {
                res.json(result);
            }
        }
    }
    res.json(results);
}

export default response;
