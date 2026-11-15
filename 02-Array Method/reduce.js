let prices = [100, 200, 300, 400];

let totalPrice = prices.reduce((total, price) => {
    return total + price;
}, 0);

console.log("Total Price:", totalPrice);


let employees = [
    { name: "Rahul", salary: 20000 },
    { name: "Amit", salary: 25000 },
    { name: "Bhaumik", salary: 30000 },
    { name: "Raj", salary: 35000 }
];

//બધા Employees ની Total Salary શોધો.
let totalSalary = employees.reduce((total, emp) => {
    return total + emp.salary;
}, 0);

console.log("Total employees Salary:", totalSalary);


let sales = [
    { agent: "Rahul", amount: 5000 },
    { agent: "Amit", amount: 8000 },
    { agent: "Bhaumik", amount: 12000 },
    { agent: "Raj", amount: 7000 }
];

//બધા Agents નું Total Sales શોધો.

let totalsales = sales.reduce((total,sales)=>{
    return total + sales.amount
},0)

console.log("Total sales:",totalsales)