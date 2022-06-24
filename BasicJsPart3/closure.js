function init() {
    var name = "Annu";
    console.log(" I'm annu");
    function sayName() {
        console.log(name);
    }
    // sayName fun are not going to run that directly
    // i have refrence but not excuting that directly
    return sayName;
};
var value = init();
value();


// Another
function doAddition(x) {
    return function(y) {
        return x+y;
    };
};

var add5 = doAddition(154)
//console.log( add5(6) );
add5(6);

// other way to print
console.log(doAddition(5) (5));