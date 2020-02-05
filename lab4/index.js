const Express = require("express");
const App = Express();
const port = 80;
const chalk = require("chalk");
const Pokemon = require ("./Pokemon.js");
const getPokemon = require('json-pokemon/getPokemon');

const pokemons = getPokemon();
const id = getPokemon.getPokemonById(1);
const name = getPokemon.getPokemonByName('Bulbasaur');
pokemons.push(new Pokemon(id, name));

App.get("/id/:id", function(req, res) {
    let result = {"error": "Could not find!"}
    pokemons.forEach(value, function() {
        if(value.id == req.params.id) {
            result = value;
        }
    });
    if(result.error) {
        console.log(chalk.red(req.path));
    } else {
        console.log(chalk.green(req.path));
    }
    res.send(result);
});

App.get("/name/:name", function(req, res) {
    let result = {"error": "Could not find!"}
    pokemons.forEach(value, function() {
        if(value.name == req.params.name) {
            result = value;
        }
    });
    if(result.error) {
        console.log(chalk.red(req.path));
    } else {
        console.log(chalk.green(req.path));
    }
    res.send(result);
});

App.listen(port, function() {
    console.log(chalk.green("Server running!"));
});
