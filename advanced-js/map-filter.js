const numbers = [3, 4, 6, 7, 8, 9];
// const output = [];

// for( let i = 0, i < numbers.length, i++){
//     const element = numbers[i];
//     const rsult = element * element;
//     output.push(result);
// }


// function square (elemnt){
//     return elemnt * elemnt;
// }

const square = element => element * element; // function declaration

const square = x => x * x; // function declaration

// console.log(output);

// const result = numbers.map(function(element){
//     // console.log(element, index, array);
//     return element * element;
// })

// const result = numbers.map(x => x * x); // function simplest version

// console.log(result);

const bigger = numbers.filter(x => x > 5);

const isThere = numbers.find( x => x > 5);

console.log(bigger);
console.log(isThere);

