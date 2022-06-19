
function tipper (a) {
    var bill = a;
    // If you want string value in Int then :-
    //var bill = parseInt(a);
    console.log( bill + 5);
}

tipper( "5" );

// It's proper function declaration so output is great :-
bigtipper( "80");
function bigtipper (a) {
    var bill = parseInt(a);
    console.log( bill + 5);
}


// it's perfectly fine :- 
var bigtipper1 = function  (a) {
    var bill = parseInt(a);
    console.log( bill + 5);
}
bigtipper1 ( "80");

// when function calling on top the it gives error:- bcz our rule is Function declaration are scanned and made available.

bigtipper1 ( "80");
var bigtipper1 = function  (a) {
    var bill = parseInt(a);
    console.log( bill + 5);
}



//it will give error that name is undefiened :- bcz our rule is Variable declaration are scanned and made undefined.

console.log( name );
var name = "Anny";

// bcz In variable have value 
function sayName() {
    var name = "Anny";
    console.log(name);
}
sayName();

// Bcz line 39 have value
console.log(name);