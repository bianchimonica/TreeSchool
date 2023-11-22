import products from "./mock.json" assert { type: "json" };

// ESERCIZIO 1
let lista = JSON.stringify(products.productsList, null, 2)
console.log("Lista prodotti: ", lista);

// ESERCIZIO 2
console.log("Il terzo prodotto è: ", products.productsList[2])

// ESERCIZIO 3
let checkPrice = products.productsList.filter(product => product.price <= 200)
let listProductMinor = JSON.stringify(checkPrice, null, 2)
console.log("Prodotti che costano meno di 200 euro: ", listProductMinor)

// ESERCIZIO 4
const productId = products.productsList.find(product => product.id === 8)
const productIdString = JSON.stringify(productId, null, 2)
console.log("Il prodotto con id 8 è: ", productIdString);


// ESERCIZIO 5
const productName = products.productsList.map(product => product.name);
const productNameString = JSON.stringify(productName, null, 2)
console.log("Lista nomi: ", productNameString)