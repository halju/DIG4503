const Express = require("express");
const App = Express();
const port = 8080;

App.use(Express.static("public"));

App.get("/", function(req, res) {
    res.send("<p>Hello world!</p>");
});

App.listen(port, function() {
    console.log("Server running!");
});