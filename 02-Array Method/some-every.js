let employees = [
    { name: "Rahul", salary: 20000, experience: 1 },
    { name: "Amit", salary: 35000, experience: 3 },
    { name: "Bhaumik", salary: 45000, experience: 2 },
    { name: "Raj", salary: 25000, experience: 1 }
];

//Task 1 – some()
//ચેક કરો કે કોઈ એક Employee ની Salary ₹40,000 કે તેથી વધુ છે કે નહીં.

let result = employees.some(emp => emp.salary >= 40000);
console.log("salary>=40000",result);

//Task 2 – every()
//ચેક કરો કે બધા Employees ની Salary ₹20,000 કે તેથી વધુ છે કે નહીં.

result = employees.every((emp)=>emp.salary>=20000)
console.log("salary>=20000",result) 

//Task 3 – some()
//ચેક કરો કે કોઈ Employee પાસે 3 વર્ષ કે તેથી વધુ Experience છે કે નહીં.

result = employees.some((emp)=>emp.experience>=3)
console.log("experience>=3:",result)

//Task 4 – every()
//ચેક કરો કે બધા Employees પાસે ઓછામાં ઓછો 1 વર્ષનો Experience છે કે નહીં.

result = employees.every((emp)=>emp.experience>=1)
console.log("experience>=1:",result)