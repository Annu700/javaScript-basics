var user = {
    name : "Annu",
    countCourse : 9,
    getCourseCount : function() {
        console.log( "Line 5", this);
    }
};
user.getCourseCount();