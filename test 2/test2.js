let shoppingList = ["Bread", "Milk", "Sugar", "Rice"];


console.log("Initial Shopping List:", shoppingList);

console.log("First Item:", shoppingList[0]);


console.log("Last Item:", shoppingList[shoppingList.length - 1]);


shoppingList.push("Cooking Oil");
console.log("After adding Cooking Oil:", shoppingList);


shoppingList.shift();
console.log("After removing the first item:", shoppingList);


let sugarIndex = shoppingList.indexOf("Sugar");
if (sugarIndex !== -1) {
  shoppingList[sugarIndex] = "Tea Leaves";
}
console.log("After changing Sugar to Tea Leaves:", shoppingList);


console.log("Total Number of Items:", shoppingList.length);