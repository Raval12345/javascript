
//Global Scope
const developer = 'Bhaumik N Raval'

function showDeveloper() {
    console.log('Inside Function->', developer)
}
showDeveloper()
console.log('OutSide Function->', developer)

//Function Scope

function UserDetails() {
    let name = 'Bhaumik N Raval';
    let experience = 1;

    console.log('name->', name)
    console.log('Experience->', experience)
}

UserDetails();

//Task

const Company = 'CareHealthInsurance'
const skills = 'Node.js';

function developerInfo() {
    const name = 'Bhaumik N Raval';
    let age = 32;
    const email = 'bhaumikraval@gmail.com';
    
    console.log('InnerFunction company->', Company)
    console.log('skills->', skills)
}

developerInfo()
console.log('OuterFunction Company->', Company)
console.log('skill->', skills)
