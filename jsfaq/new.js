class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 25000);
console.log(heroPerson);

const friendlyPerson = new Person('Hero', 'Kalam', 34000);
console.log(friendlyPerson);

// Object creation with function in old way

function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1('Monirul','Islam', 45000);
console.log(oldPerson);