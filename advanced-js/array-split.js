const nums = [1,2,3,5,6,2,7,9,10];

// const part = nums.slice(2,5);

const removed = nums.splice(2,3, 77, 88, 44);

// console.log(removed);
// console.log(nums);

const together = nums.join(",");

console.log(together);