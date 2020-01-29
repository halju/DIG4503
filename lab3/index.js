const Express = require("express");
const public = require(".public/index.html");
const App = Express();
const port = 8080;

App.use(Express.static("public"));

App.get("/", function(req, res) {
    res.send("Hello world!");
});

App.listen([port, function()) {
    console.log("Server running!");
}