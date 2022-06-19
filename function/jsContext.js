// In javascript it will work if fuction called top 
// sayHello();

// function sayHello() {
//     console.log("Hello Anny")
// }

if ( 2 === "2") {
    console.log("This is true");
}

var myName = "Anny";
// Here window Obj is not working.
if ( myName === window.myName) {
    console.log("There is again true");
}