const Person = require("./Person.js");

let p = new Person("Hal", "Blue");

const chalk = require("chalk");
console.log(chalk.blue(p.name)); 