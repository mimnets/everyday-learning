// const nums = [12, 25, 34, 65, 23];
const friends = [
    { name: 'Monir', money: 23},
    { name: 'Lonir', money: 43},
    { name: 'Gonir', money: 33},
    { name: 'Tonir', money: 25},
    { name: 'Bonir', money: 34}
]
// nums.map(num => num * 2);
// nums.filter(num => num > 20);
// nums.find(num => num > 23);
const total = friends.reduce( (sum, friend) => {
    console.log(sum, friend);
    return sum + friend.money;
} , 0);
console.log(total);