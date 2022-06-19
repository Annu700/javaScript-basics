var user = {
    firstName : "Anny",
    lastName : "Pandey",
    role : "Admin",
    loginCount : 36,
    facebookSignedIn : true
}

console.log(user.firstName);

// other way

console.log(user["lastName"]);

// Befor updation And
// After updation

console.log(user.loginCount);
user.loginCount = 89;
console.log(user.loginCount);

// All variable printing

console.log(user);

// Other formate (table)

console.table(user);