var name = "Anny";

console.log(name);

// Bcz global scope
function sayName() {
    console.log(name);
}
sayName();

function sayName() {
    var name = "Mrs Anny"
    console.log(name);
}
sayName();

// It will take from 12 no line , if there was not availabe then it will go top 
function sayNameTwo() {
    console.log(name);
}
sayNameTwo();