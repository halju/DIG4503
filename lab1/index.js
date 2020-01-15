const Person = require("./Person.js");
const chalk = require("chalk");

let p = new Person("Hal", "Blue");

console.log(chalk.blue(p.name)); 