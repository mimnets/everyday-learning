const normalPerson = {
    firstName: "Rahim",
    lastName: "Uddin",
    salary: 16000,getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

// normalPerson.chargeBill(150);
// normalPerson.chargeBill(1500);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000,
}

const frindlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 26000,
}
// normalPerson.chargeBill()

const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(2000);
heroBillCharge(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(frindlyPerson);

friendlyChargeBill(300);
friendlyChargeBill(3400);
console.log(frindlyPerson.salary);