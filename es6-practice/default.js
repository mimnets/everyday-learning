function add(num1,num2 = 0;){ //In ES6 it is now simplified by providing deafult value 
    // if(num2 == undefined){
    //     num2 = 0; // If we forget to provide the second value in a function call like : add(15)
    // }
    // OR
    // num2 = num2 || 0; //Instead of if()
    // return num1 + num2;
}

const total = add(15,17);

console.log(total);