const Express = require("express");
const public = require("/public/index.html");
const App = Express();
const port = 8080;

App.get("/", function(Request, Response) {
    Response.send("Hello world!");
});

App.get("/public", function(Request, Response) {
    Request.get(public);
});

App.listen(port, function() {
    console.log("Server running!");
});