
const names = [ "youtube", "instagram", "facebook", "netflix"];

// For Of Loop
// Measurlly used for array

for (const n of names) {
    console.log( n )
}

// For In Loop
// In means Object
const Symbols = {
    yt : "youtube",
    fb : "facebook",
    ig : "instagram",
    lco : "learncodeonline", 
};
// Output is return Key(object) Like :- yt, fb
for (const s in Symbols) {
    console.log( s );
}

// key Values
for (const s in Symbols) {
    console.log( Symbols[s] );
}

// Other way 
for (const s in Symbols) {
    console.log(` Key is: ${s} and Values is: ${Symbols[s]} `);
}