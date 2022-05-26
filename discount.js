var listPrice = 799;
var sellingPrice = 199;

var discountPercent = ((listPrice - sellingPrice) / listPrice) * 100;
console.log(discountPercent);

//if you don't want .093354and all so use library or function
displayDiscountPercent = Math.round(discountPercent);
console.log(displayDiscountPercent);

//it's like pattern...
console.log("$" + sellingPrice + "$" + listPrice + displayDiscountPercent + "%OFF");


