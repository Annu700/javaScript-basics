// Create an application with following roles :
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content

var user = "admin";

switch (user) {
    case "admin":
        console.log("you get full access");
        break;
        case "subadmin":
            console.log("you get access to create/delete courses");
            break;
            case "testprep":
                console.log("you get access to create/delete test");
                break;
                case "user":
                    console.log("you get access to consume content");
                    break;
                    default:
                       console.log("Trail user");
}