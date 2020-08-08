 let bonus = 20;

 function sum(first, second){
     let result = first + second + bonus;
    if(result > 9){
        let mood = "happy"; // var can be call from globally is called hoisting , but let or const declared variable only accessible insite the function
        mood = " funcky";
    }
     return result;
 }

 const output = sum(3, 5);

 console.log(bonus)
 console.log(output);

