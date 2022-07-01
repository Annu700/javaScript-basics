class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    courseList = [];
    
    getInfo() {
        return {name: this.name, email: this.email};
    }
    enrollcourse(name) {
        this.courseList.push(name);
    }
    getCourseList() {
        return this.courseList;
    }
    login() {
        return "Yoe are logged in";
    }
}

class subAdmin extends User{
    constructor(name, email) {
        super(name, email);
    }
    getAdminInfo() {
        return "You are Admin";
    }
    // this login will run bcz object created of this class.
    login() {
        return "Admin can logged in only";
    }
}

const tom = new subAdmin("tom", "tom@gmail.com" );
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());