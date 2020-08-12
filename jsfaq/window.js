var name = "Monirul"

function add (num1, num2){
    var result = num1 + num2;
    console.log("result inside", result)
    console.log("name inside", name)
    return result;
}

// console.log("result outside", result)
console.log("name outside", name)
var sum = add(13,21);

console.log(sum);