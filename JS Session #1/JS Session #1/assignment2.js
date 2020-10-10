var product = prompt("Enter product name");
var quantity = prompt("Enter quantity");
var price = prompt("Enter price");

console.log("Product Name:" + " " + product);
console.log("Quantity:" + " " + quantity);
console.log("Price:" + " " + price);
console.log("State Tax: 10%");
 
var finalPrice = (quantity * price)*1.10;
console.log("Final Price:" + " " + finalPrice);