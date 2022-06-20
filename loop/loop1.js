// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }

const myState = [
    "Bihar",
    "UP",
    "MP",
    1998,
    "Delhi",
    "Maharastra",
];
// for (let i = 0; i < myState.length ; i++) {
//     console.log(myState[i]);
// }

// Continue keyword

// for (let i = 0; i < myState.length ; i++) {
//     if ( typeof myState[i] !== "string" ) continue;
//     console.log(myState[i]);
// }

// only number 

// for (let i = 0; i < myState.length ; i++) {
//     if ( typeof myState[i] === "string" ) continue;
//     console.log(myState[i]);
// }

// Break keyword

for (let i = 0; i < myState.length ; i++) {
    if ( typeof myState[i] !== "string" ) break;
    console.log(myState[i]);
}