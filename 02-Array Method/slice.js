let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

let result = fruits.slice(1, 3);

console.log(result);
console.log(fruits);

let employees = [
    "Rahul",
    "Amit",
    "Bhaumik",
    "Raj",
    "Karan",
    "Deepak"
];

// પહેલા 3 Employees મેળવો.

let firstthree = employees.slice(0,3)
console.log("First Three Employee:",firstthree)

//છેલ્લાં 2 Employees મેળવો.

let lasttwo = employees.slice(-2)
console.log("Last Two Employee:",lasttwo)

//Index 1 થી Index 4 સુધીના Employees મેળવો (Index 4 સામેલ નહીં થાય).

let onetothree = employees.slice(1,4)
console.log("Index 1 To 3:",onetothree)