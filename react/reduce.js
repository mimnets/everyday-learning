const nums = [12, 25, 34, 65, 23];
nums.map(num => num * 2);
nums.filter(num => num > 20);
nums.find(num => num > 23);
const total = nums.reduce( (sum, num) => {
    console.log(sum, num);
    return sum + num
} , 0);
console.log(total);