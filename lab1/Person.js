class Person {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    speak() {
        console.log(chalk.blue("Hi!"));
    }
}
module.exports = Person;