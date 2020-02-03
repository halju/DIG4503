const Express = require("express");
const App = Express();
const port = 80;

App.use("/public", Express.static("public"));

App.get("/", function(req, res) {
    res.send("Hello world!");
});

App.listen(port, function() {
    console.log("Server running!");
});

// "/id/#id"
// "/name/#name"