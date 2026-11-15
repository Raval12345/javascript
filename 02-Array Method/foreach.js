
//For Each
let students = ["Rahul", "Amit", "Bhaumik", "Raj"];

students.forEach(function(student,index) {
    console.log(index,student);
});

let prices = [100, 200, 300, 400];

prices.forEach(function(price, index) {
    console.log("Index:", index, "Price:", price);
});


students.forEach((student) => {
    console.log(student);
});

let sales = [5000, 8000, 12000, 7000];

sales.forEach((amount, index) => {
    console.log(`Agent ${index + 1}: ₹${amount}`);
});

let employees = ["Bhaumik", "Rahul", "Amit"];

employees.forEach((name, index) => {
    console.log(`Employee ${index + 1}: ${name}`);
});

let numbers = [10, 20, 30, 40];

let result = numbers.forEach((num) => {
    return num * 2;
});

console.log(result);


