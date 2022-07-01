var returnedValue = Math.max(5, 4, 2, 7, 6, 8, 3, 9);
console.log(returnedValue);

var myObj = {};

Object.assign(myObj, {a:4, b:8, c:3}, {x:4, y:6, Z:5});
console.log(myObj);

function sumOne(a, b) {
    return a+b;
}
console.log(sumOne(2, 5));

// If anything which is not define so it will ignored
console.log(sumOne(2, 5, 8));

// Spread Operator
function sumOne(a, b) {
    return a+b;
}
var myArray = [5, 2]
// if you run like this you will get undefined
console.log(sumOne(myArray));

// you can use ...args 
console.log(sumOne(...myArray)); // spread operator


// if you are not sure how much value will come then use ...args 
// args is variable name

function sumTwo(...args) {
    // args print passing value separate 2
    console.log(args);
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg;
    }
    return sum;
};
console.log(sumTwo(3, 5, 2));

// for multiple things

function sumTwo(a, b, ...args) {
    let multi = a*b;
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg;
    }
    return [sum, multi];
};
// here first 2 value will multiply nd rest of will sum
console.log(sumTwo(3, 5, 2, 7, 4));