var User = function( FirstName, CourseCount) {
    this.FirstName = FirstName;
    this.CourseCount = CourseCount;
    this.getCourseCount = function() {
        console.log(` Course Count is : ${CourseCount}`);
    };
};

// If want to somthing extra add in previous code section

User.prototype.getFirstName = function() {
    console.log(`Your first name is : ${this.FirstName}`);
};

var Anny = new User("Aanvi", 7);
//console.log(Anny);
Anny.getCourseCount();
Anny.getFirstName();

var Sam = new User("sam", 7);
//console.log(Sam);
Sam.getCourseCount();
Sam.getFirstName();