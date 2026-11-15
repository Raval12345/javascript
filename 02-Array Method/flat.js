let numbers = [10, 20, [30, 40], 50];

let result = numbers.flat();

console.log(result);


let students = [
    ["Rahul", "Amit"],
    ["Bhaumik", "Raj"],
    ["Karan", ["Deepak", "Vikas"]]
];  

result = students.flat()
console.log(result)
result = students.flat(2)
console.log(result)
result = students.flat(Infinity)
console.log(result)
