const Annu = {
    firstName : "Anny",
    lastName : "roy",
    role : "Admin",
    courseCount : 3,
    getInfo : function() {
        console.log(`
           First name is : ${this.firstName}
           Last name is : ${this.lastName}
           role is : ${this.role}
           ans he is studing ${this.courseCount} courses   
        `);
    },
};


const dj = {
    firstName : "Sammy",
    lastName : "roy",
    role : "Sub-Admin",
    courseCount : 30,
};
// if i want to get all information of getinfo so use bind
// Bind always gives you to reference back and you have to rune that ref
// Like

Annu.getInfo.bind(dj)();

// other

var djInfo = Annu.getInfo.bind(dj);
djInfo();

// other you can also use call

Annu.getInfo.call(dj);