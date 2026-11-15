let numbers = [10, 20, 30, 40, 50];

let result = numbers.find(num => num > 20);

console.log(result);


let users = [
    { id: 1, name: "Rahul", role: "User" },
    { id: 2, name: "Amit", role: "Admin" },
    { id: 3, name: "Bhaumik", role: "Developer" },
    { id: 4, name: "Raj", role: "User" }
];

// Task 1: id = 3 ધરાવતો User શોધો.

let userwithid = users.find((user) => {
    return user.id === 3;
})
console.log("userwithid:", userwithid);


// Task 2: role = "Admin" ધરાવતો User શોધો.

let userwithrole = users.find((user)=>{
    return user.role === "Admin";
})

console.log("userwithrole:",userwithrole)
// Task 3: name = "Raj" ધરાવતો User શોધો.

let username = users.find((user)=>{
    return user.name === "Raj";
})
console.log("username:",username)

// Task 4: role = "Manager" ધરાવતો User શોધો.

let userRole = users.find((role)=>{
    return role.role === "Manager";
})
console.log("Role:",userRole)