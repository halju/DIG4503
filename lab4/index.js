const Express = require("express");
//const pokemon = require("json-pokemon");
const chalk = require("chalk");
const App = Express();
const port = 80;

App.get("/:id/:name", function(req, res) {
    res.send(req.params);
});

App.listen(port, function() {
    console.log(chalk.green("Server running!"));
});

// "/id/#id"
// "/name/#name"

//req.params.id  req.params.name