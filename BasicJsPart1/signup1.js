const uid = "abc23"


var fullName = "ANNU";
var email = "annu34@gmail.com";
var password = "12345";
var confirmPassword = "12345";
var courseCount = 0;
var isLoggedInFromGoogle = true;

//if you want to take name from user...
//FullName = prompt("Enter your name");

console.log(uid);

// + , both can use....correct
console.log("Full name is :" + fullName);
console.log("Full name is :", fullName);

//other way to print...
console.log(`
        With Unique ID : ${uid}
        User Name is : ${fullName}
        His email is : ${email}
        Uses the password : ${password}
`);