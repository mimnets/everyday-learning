const person = { name : 'Jack William', age : 17, job : 'facebooker', gfName : 'Ema Watson', address : 'Kochu Khet', phone : '01737265272', friends : ['Tom Hanks', 'Tom Cruse', 'Tom Yarn']}

const { phone, gfName, address, salary} = person;
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, salary, address);
// console.log(gfName, phone);
// console.log(gfName, phone);

const friends = ['Sakib Khan', 'Arman Khan', 'Monir Khan', 'Salman Khan'];

const [chotoFriend, nextFriend, ...olderF] = friends;
console.log(olderF);


const complexObject = {
    name: 'abc';
    info:{
        address : 'Kola Bagan';
        leader : 'Tiger Leader';
    }
}

const {leader} = complexObject.info;

console.log(leader);