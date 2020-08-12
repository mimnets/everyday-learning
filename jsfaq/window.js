var name = "Monirul"

function add (num1, num2){
    // window.result = num1 + num2; // declared as a global variable
    // result = num1 + num2; // without var it is also declared as a global variable
    var result = num1 + num2;
    console.log("result inside", result)
    console.log("name inside", name)
    function double(num){
        return num * 2;
    }
    var total = double(result);
    return total;
}

// console.log("result outside", result)
console.log("name outside", name)
var sum = add(13,21);

console.log(sum);