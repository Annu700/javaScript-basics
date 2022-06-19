var user = {
    firstName : "Anny",
    lastName : "Pandey",
    role : "Admin",
    loginCount : 36,
    facebookSignedIn : true,
    // Empty Array
    courseList: [],    
    // Function declaration
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    buyCourseCount : function () {
        return `${this.firstName} is enrolled in total no of ${this.courseList.length} courses`;
    },
};   
console.log(user.buyCourseCount()); 
user.buyCourse("React JS Courses");
user.buyCourse("Java");
user.buyCourse("Python");
user.buyCourse("React Native");
console.table(user);
//console.log(user.buyCourseCount());