const Express = require("express");
const App = Express();
const port = 8080;

App.get("/", function(req, res) {
    res.send("<p>Hello world!</p>");
});

App.use(Express.static("public"));

App.listen(port, function() {
    console.log("Server running!");
});