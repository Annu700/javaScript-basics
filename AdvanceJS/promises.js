
const uno = () => {
    return " I am One ";
};

// const dos = () => {
//     setTimeout(() => {
//        return "I am Two" 
//     }, 3000);
// };

const dos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("I am Two");
             }, 3000);
        });
    };

const tres = () => {
    console.log(" I am Three ");
};


// Whenever you are making such call inside method you have to make method async.
const callMe = async () => {
    let valOne = uno();
    console.log(valOne);
// it will after uno and then run everithing afterthat
    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callMe();