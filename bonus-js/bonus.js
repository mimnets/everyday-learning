var marks = [89,45,34,65,12,56,77,34];

var marksElement = marks.length;

for(i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element < marks){
        marks = element;
    }
}
console.log(marksElement);


function add(number1, number2){
    var total = number1 + number2;
    return total;
}

var result1 = add(65, 59);
console.log(result1);

console.log('Nothing!');

var result2 = add(345, 4545);
console.log(result2);

function largestNumber(numbers){
    var larger = numbers[0];
    for (var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}

var output = largestNumber([78, 87, 89]);
console.log("Output = ", output);

function smallestName(name){
    var inputName = name[0];
    for( var i = 0; i < name.length; i++){
        var finalName = name[i];
        if(finalName.length > inputName.length){
            inputName = finalName;
        }
    }
    return inputName;
}

var resultName = smallestName(["monir", "pon", "do", "kala mia"]);
console.log(resultName);