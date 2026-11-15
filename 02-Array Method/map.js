// Map 

let numbers = [10, 20, 30, 40];

let result = numbers.map((num) => {
    return num * 2;
});

console.log(result);


let prices = [100, 200, 300, 400];

let updatedPrices = prices.map((price) => {
    return price + 50;
});

console.log("Original Prices:", prices);
console.log("Updated Prices:", updatedPrices);


let students = ["Rahul", "Amit", "Bhaumik"];

let result1 = students.map((student, index) => {
    return `Student ${index + 1}: ${student}`;
});

console.log(result1);

let numbers2 = [5, 10, 15, 20];

let result2 = numbers2.map((num, index) => {
    return num + index;
});

console.log(result2);