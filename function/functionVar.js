/*
Define a function that can answer the role of a user.
A user can be on following roles :
admin - gets full access
subadmin - gets access to create/delete courses
testprep - gets access to create/delete tests
user - gets access to consume content
other - Trail User.

Input: getUserRole(name, role)
*/

function getUserRole(name, role){
    switch( role ) {
        case "admin":
            return `${name} is admin with all access`;
            break;
            case "subadmin":
                return `${name} is sub-admin with access to create/delete courses`;
                break;
            case "testprep":
                return `${name} is test prep with access to create/delete tests`;
                break;
            case "user":
                return `${name} is user  access to consume content`;
                break;
            default:
                return `${name} is a trail user`;
                break;
        
    }
}

console.log(getUserRole("Annu" , "testprep"));

//another way

var getRole = getUserRole("Anny" , "user");
console.log(getRole);

