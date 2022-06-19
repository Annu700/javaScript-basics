var countries = ["india", "USA", "Japan", "Russia"];

var state = new Array("Mumbai", "Bihar", "Assam", "Delhi");

//console.log(state[0]);
//console.log(state.length);

//pop for removing the last element
state.pop();
//console.log(state);

// Unshift add the value first
state.unshift("New value");
//console.log(state);

//shift for removing
state.shift();
console.log(state);

//indexoff is giving the index no of values
console.log(state.indexOf("Bihar"));

//if value is not available the gives -1
console.log(state.indexOf("new"));

//it's changing string in array
console.log(Array.from("Bihar"));