var myMap = new Map()

myMap.set(1, "Anu");
myMap.set(2, "Any");
myMap.set(3, "samy");
myMap.set(4, "namy");

console.log(myMap);

// How to fetch key or valur from map
for(let key of myMap.keys()) {
    console.log(`key is ${key}`);
}

for(let value of myMap.values()) {
    console.log(`value is ${value}`);
}

// both
for(let [key, value] of myMap) {
    console.log(`key is : ${key}, value is : ${value}`);
}

// foreach
myMap.forEach((v) => console.log(`value is : ${v}`));
// here key is uderstanding the index so thats y is not returnig the key directly
myMap.forEach((k) => console.log(`key is : ${k}`));
myMap.forEach((k, v) => console.log(`key is : ${k} value is : ${v}`));

// delete
myMap.delete(2);
console.log(myMap);