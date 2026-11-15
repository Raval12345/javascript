let fruits = ["Mango", "Apple", "Banana", "Orange"];

fruits.sort();

console.log(fruits);

let numbers = [100, 5, 25, 10, 2];

//numbers.sort(); JavaScript માં sort() Default રૂપે Elements ને String તરીકે ગોઠવે છે.

//Ascending Order (નાનાથી મોટા)
numbers.sort((a, b) => {
    return a - b;
});

console.log("Ascending Order (નાનાથી મોટા):", numbers)

//Descending Order (મોટાથી નાના)
numbers.sort((a, b) => {
    return b - a;
});
console.log("Descending Order (મોટાથી નાના)", numbers);



let employees = [
    { name: "Rahul", salary: 25000 },
    { name: "Amit", salary: 40000 },
    { name: "Bhaumik", salary: 30000 },
    { name: "Raj", salary: 20000 }
];

// Salary: Low to High
let lowToHigh = [...employees].sort((a, b) => {
    return a.salary - b.salary;
});

console.log("Low to High:", lowToHigh);

// Salary: High to Low
let highToLow = [...employees].sort((a, b) => {
    return b.salary - a.salary;
});

console.log("High to Low:", highToLow);





let students = [
    { name: "Rahul", marks: 65 },
    { name: "Amit", marks: 90 },
    { name: "Bhaumik", marks: 75 },
    { name: "Raj", marks: 50 }
];

let lowtohighmarks = [...students].sort((a, b) => {
    return a.marks - b.marks
}
)

console.log("Low To High Marks:",lowtohighmarks)

let hightolowmarks = [...students].sort((a,b)=>{
    return b.marks -a.marks
})
console.log("High To Low Marks:",hightolowmarks)

console.log("original Array:",students)