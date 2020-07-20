function evenify(num){
    if(num % 2 == 0){
        console.log(num, ' : is even number');
    }
    else{
        console.log(num*2, ' : is odd number');
    }
}

function evenify_all(nums) {
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        evenify(num);
    }   
}

nums = [12, 23, 29, 34, 65, 74, 54];
evenify_all(nums)
// for(let i = 0; i < nums.length; i++){
//     const num = nums[i];
//     evenify(num);
// }

friends_age =[13, 19, 22, 18];
evenify_all(friends_age)
// for (let i = 0; i < friends_age.length; i++) {
//     const age = friends_age[i];
//     evenify(age);
// }