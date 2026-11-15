let numbers = [10, 15, 20, 25, 30];

let result = numbers.filter((num) => {
    return num > 20;
});

console.log(result);

let ages = [12, 18, 25, 15, 30, 17, 40];

let adults = ages.filter((age) => {
    return age >= 18;
});

console.log(adults);


let numbers1 = [10, 20, 30, 40, 50];

let result1 = numbers1.filter(num => num > 25);

console.log("Original:", numbers1);
console.log("Filtered:", result1);




let employees = [
    { name: "Rahul", salary: 20000 },
    { name: "Amit", salary: 35000 },
    { name: "Bhaumik", salary: 45000 },
    { name: "Raj", salary: 25000 }
];

let result2 = employees.filter((emp) => {
    return emp.salary >= 30000;
});

result2.forEach((emp) => {
    console.log(`Name: ${emp.name}, Salary: ${emp.salary}`);
});




let products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Mobile", price: 20000, category: "Electronics" },
    { name: "Shirt", price: 1500, category: "Clothing" },
    { name: "Headphones", price: 3000, category: "Electronics" },
    { name: "Shoes", price: 2500, category: "Fashion" }
];

// Task 1: Price 3000 થી વધુ હોય તે Products પસંદ કરો.

let productRes = products.filter((price) => {
    return price.price > 3000;
})
console.log(productRes);
// Task 2: ફક્ત Electronics Category ના Products પસંદ કરો.
let electronicsProducts = products.filter((products)=>{
    return products.category === "Electronics";
})
console.log(electronicsProducts);

// Task 3: Price 2000 કરતાં ઓછી હોય તે Products પસંદ કરો.  

let priceBelow2000 = products.filter((price) => {
    return price.price < 2000;
})
console.log(priceBelow2000);