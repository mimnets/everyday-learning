const students = [
    {id: 21, name: 'Omor Sunny'};
    {id: 34, name: 'Maanaaa'};
    {id: 43, name: 'Moyori'};
    {id: 15, name: 'Dipjol'};
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id > 40);

console.log(bigger);