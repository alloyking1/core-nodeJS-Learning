class Person {
    constructor(name, greeting) {
        this.name = name;
        this.greeting = greeting;
    }

    greet() {
        console.log(`${this.greeting}, my name is ${this.name}`);
    }
}

module.exports = Person