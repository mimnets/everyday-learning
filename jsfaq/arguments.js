function addNumbers(num1, num2){
    // console.log(arguments[3]); // Array like arguments
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    function logInfo(message){
        console.log(message);
    }
    logInfo('Good morning');
    return sum;
}

var result = addNumbers(3, 5, 7, 29, 6);

console.log(result);