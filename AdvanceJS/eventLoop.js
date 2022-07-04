
const uno = () => {
    console.log(" I am One ");
};

const dos = () => {
// when run this it will not wait for settimeout , run first tres then settimeout
    setTimeout(() => {
        console.log("Wooohooo");}, 3000);
    console.log(" I am Two ");
};

const tres = () => {
    console.log(" I am Three ");
};

uno();
tres();
dos();