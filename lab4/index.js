const Express = require("express");
const App = Express();
const port = 80;

const chalk = require("chalk");
const pokemons = require('json-pokemon');

App.get("/id/:id", function(req, res) {
    let result = {"error": "Could not find!"}
    pokemons.forEach(function(value) {
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
    pokemons.forEach(function(value) {
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