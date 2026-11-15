let numbers = [1, 2, 3];

let result = numbers.flatMap((num) => {
    return [num * 2];
});
console.log(result);


let employees = [
    { name: "Rahul", skills: ["JavaScript", "Node.js"] },
    { name: "Amit", skills: ["React", "CSS"] },
    { name: "Bhaumik", skills: ["Express.js", "PostgreSQL"] }
];

//map() નો ઉપયોગ કરીને દરેક Employee ની skills મેળવો.

   result = employees.map((skills)=>{
    return skills.skills
   })
   console.log("Employee Skills:",result)

//flatMap() નો ઉપયોગ કરીને બધી Skills એક જ Array માં મેળવો.

   result = employees.flatMap((skills)=>{
    return skills.skills
   })
   console.log("Flat Map Employee Skills:",result)

//flatMap() નો ઉપયોગ કરીને દરેક Employee નું નામ અને તેની Skills અલગ-અલગ Elements તરીકે મેળવો.

   result = employees.flatMap(emp => [emp.name, ...emp.skills]);
   console.log("flatMap() નો ઉપયોગ કરીને દરેક Employee નું નામ અને તેની Skills અલગ-અલગ Elements તરીકે મેળવો:",result)