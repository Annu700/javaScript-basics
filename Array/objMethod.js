var user = {
    firstName : "Anny",
    lastName : "Pandey",
    role : "Admin",
    loginCount : 36,
    facebookSignedIn : true,
    // Empty Array
    courseList: [],
    // Function declation inside the variable
    buyCourses : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function () {
        return `${this.firstName} is enrolled in total no of ${this.courseList.length} courses`;
    },
};
var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourses("react js courses ");
console.log(user.getCourseCount());