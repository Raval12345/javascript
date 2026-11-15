let fruits = ["Apple", "Banana", "Mango", "Orange"];

let result = fruits.splice(1, 2);

console.log("Removed:", result);
console.log("Original Array:", fruits);

let employees = [
    "Rahul",
    "Amit",
    "Bhaumik",
    "Raj",
    "Karan"
];

//Index 1 પરથી 2 Employees Remove કરો.

employees.splice(1,2)
console.log("Index 1 પરથી 2 Employees Remove:",employees)

//Index 2 પર "Deepak" Add કરો.

employees.splice(2,0,"Deepak")
console.log("Index 2 પર Deepak Add કરો:",employees)

//Index 1 પરના Employee ને "Vikas" થી Replace કરો.

employees.splice(1,1,"Vikas")
console.log("1. Index 1 પરના Employee ને Vikas થી Replace કરો:",employees)
