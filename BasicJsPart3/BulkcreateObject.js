var User = {
    name : " ",
    getUserName : function() {
        console.log(` name is : ${this.name}`);
    },
};

var Annu = Object.create(User);
console.log(Annu);
// Foe name 
Annu.name = "Annyyyyyyyyyyyy";
Annu.getUserName();


// Other way
// But not good way to write it
var Sammy = Object.create(User, {
    name : {value : "Sammmyyyyy"}
});
Sammy.getUserName();
