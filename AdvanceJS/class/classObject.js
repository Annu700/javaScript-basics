// its new one to import 
//import User from "./class";


// for fixing 

const User = require("./class.js");

const annu = new User("Annuuu", "anu123@gmail.com");

console.log(annu.getInfo());
annu.enrollcourse("React");
annu.enrollcourse("Angular");

// it will show like array
//console.log(annu.getCourseList());

// it will show single value
let courses = annu.getCourseList();
courses.forEach( (c) => console.log(c));
