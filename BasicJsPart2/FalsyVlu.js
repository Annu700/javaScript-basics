// falsy value :-
// Undefined
// null
// ' '
// Nan

var user = '' ;

if ( user ) {
    console.log("condition");
}
// when we'll use any falsy value will never get return bcz if is always return true value :

var user = 2 ;

if ( 2 == user ) {
    console.log("condition");
}
//it is not checking strictly
// if u want strictly checking then use ===

var user = 2 ;

if ( 2 === user ) {
    console.log("condition");
}
