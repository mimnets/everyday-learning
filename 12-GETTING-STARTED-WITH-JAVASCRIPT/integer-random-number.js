function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max -min)) + min;
}

var result = getRandomInt(1000,9999);

console.log(result);