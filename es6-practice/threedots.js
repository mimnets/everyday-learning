const ages = [12, 14, 16, 13, 18];
const ages2 = [15, 17, 19];
const ages3 = [25, 37, 29];

const allAges = ages.concat(ages2).concat[5].concat(ages3);
const allAges2 = [ages, ages2, 5, ages3]; //This way elements is in array into parent array

const allAges3 = [...ages, ...ages2, 5, ...ages3]; // a single array


console.log(allAges);
console.log(allAges2);
console.log(allAges3);

const business = 650;
const minister = 450;
const sochib = 350;

const takaPoisa = [650, 450, 350];
const maximum = Math.max(business, minister, sochib);
// const maximum2 = Math.max(takaPoisa);
const maximum2 = Math.max(...takaPoisa);

console.log(maximum);
console.log(maximum2);