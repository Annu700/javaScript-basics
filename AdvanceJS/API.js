// fatch is a method and its always gonna give you promise
// And once be promise will resolve afterthat you can give as many as then chain
fetch("https://en.wikipedia.org/wiki/Joker_(2019_film)")
.then((response) => {
    return response.json();
})
.then((data) => {
    // data is honlding all these things whatever on that URL
    // console.log("DATA is :", data);
    var joke = data.value;
    // joke is holding value like joke in written
    console.log("JOKE:", joke);
})
.catch();