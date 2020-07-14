// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5

// 10! = 1*2*3*4*5*6*7*8*9*10

// Facetorial means multiply the givn number with from 1 to till the given number

// var factorial = 1;
// for(var i = 1; i <= 10; i++){
//     factorial = factorial * i; 
//     console.log(i, factorial);
// }

// With a function

function factorial(n){
    var fact = 1;
    for(var i = 1; i <= n; i++){
        fact = fact * i; 
    }
    return fact;
}

var result = factorial(5);
console.log(result);