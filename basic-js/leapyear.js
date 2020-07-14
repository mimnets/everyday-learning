// const year = 3588;
// const remainder = year % 4;

// if(remainder == 0){
//     console.log('Your year is a Leap Year.');
// } else{
//     console.log('Your year is not a Leap Year.');
// }
// console.log(remainder == 0);

function isLeapYear(year){
    const remainder = year % 4;
    if (remainder == 0){
        return true;
    }else{
        return false;
    }
}

//Try google to learn and practice completer leap year 