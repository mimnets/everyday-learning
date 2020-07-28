function getFullName(firstName, lastName){
// const fullName = firstName + ' ' + lastName; // We can write in different way
let fullName = '';
for (let i = 0; i < arguments.length; i++){
    const namePart = arguments[i];
    fullName = fullName + ' ' + namePart;
}
return fullName;
}

const name = getFullName('Hanif', 'Songket','Poribohon','Subokta','Jonodorodi');
console.log(name);

//Arguments is a array like 
//We cannot call arguments out side of a function
// We can covert argumetns as like array by adding three dots befor arguments : ...arguments