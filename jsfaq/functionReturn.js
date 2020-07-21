function evenify(num){
    var result;
    if(num % 2 == 0){
        // return num;
        result = num;
    }
    else{
        // return num*2;
        result = num * 2;
    }
    return result;
}

var result = evenify(13);
var square = result * result;
console.log(square);

function evenify_all(nums) {
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        evenify(num);
    }   
}

// nums = [12, 23, 29, 34, 65, 74, 54];
// evenify_all(nums)
// for(let i = 0; i < nums.length; i++){
//     const num = nums[i];
//     evenify(num);
// }

// friends_age =[13, 19, 22, 18];
// evenify_all(friends_age)
// for (let i = 0; i < friends_age.length; i++) {
//     const age = friends_age[i];
//     evenify(age);
// }