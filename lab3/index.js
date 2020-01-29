const Express = require("express");
const public = require("./public/index.html");
const App = Express();
const port = 8080;

App.use(Express.static("public"));

App.get("/", function(Request, Response) {
    Response.send("Hello world!");
});

App.listen(port, () => {
    console.log("Server running!");
});
