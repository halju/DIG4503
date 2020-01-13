const Person = require("./Person.js");

class Hal extends Person {
    constructor(name, color) {
        super(name, color);
    }
}
module.exports = Hal;