const nums = [12, 25, 34, 65, 23];
nums.map(num => num * 2);
nums.filter(num => num > 20);
nums.find(num => num > 23);
nums.reduce( (sum, num) => sum + num , 0)