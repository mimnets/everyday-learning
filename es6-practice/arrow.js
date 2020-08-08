// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFunc(num){
//     return num * 2;
// }

const doubleIt = num => num * 2; //Single parameter function call
const add = (x, y) => x + y; // double parameter function call
const giveMe5 = () => 5; // no or empty parameter function call



const doMath = (x, y) =>{ //This is a multiline function call
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;

}

const result = doubleIt(5);
const result2 = add(50,70);
const result3 = giveMe5();
const result4 = doMath(7,5);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
