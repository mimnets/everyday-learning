// var number = Math.random() * (9999-1000);
// var result = Math.round(number);

// console.log(result);

// function getRandom(){
//     return Math.random() * 100;

// }

// var result = getRandom(999);

// console.log(result);

// function getRandomArbitary(min, max){
//     return Math.random() * (max - min) + min;
// }

// var result = getRandomArbitary(100,999);

// console.log(result);

function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max -min)) + min;
}

var result = getRandomInt(1000,9999);

console.log(result);