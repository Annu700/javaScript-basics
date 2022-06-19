var isEven = (element) => {
    // if(element % 2 === 0) {
    //     return true;
    // }
    // return false;
    return element % 2 ===0;
};
//console.log(isEven(6));

// Every alway check full array if every test is passed then true or any of one ill false then false.
// var result = [2, 4, 6, 8].every(isEven);
// console.log(result);


// Callback
// e means what i'm expecting
var result = [2, 4, 6, 8].every((e) => {
    return e % 2 ===0;
});
console.log(result);

// another way to callback
// If u dont return the you have to remove {}(curlybracket) 

var result = [2, 4, 6, 8].every((e) => e % 2 ===0)
console.log(result);

//more shortcort

var result = [2, 4, 6, 8].every((e) => (e % 2 ===0));
console.log(result);
