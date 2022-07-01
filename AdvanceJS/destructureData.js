// const user = ["Annu", 3 , "Admin"];
// var name = user[0];
// var role = user[2];
// console.log(role);

// // Other ways

// var [name, courseCount, role] = user;
// console.log(role);

const myUser = {
    name : "Annu",
    courseCount : 9,
    role : "Admin"
};
//console.log(myUser.courseCount);

// other way
const {name, courseCount, role} = myUser
console.log(name);