//Mercado
let nombreDelMercado: string = "Almacen Enzo";
let producto1: string = "Gaseosa";
let stockProd1: number = 50;
let producto2: string = "Yerba";
let stockProd2: number = 20;
let producto3: string = "Pure de Tomate";
let stockProd3: number = 33;
let producto4: string = "Harina";
let stockProd4: number = 40;
let producto5: string = "Galletitas surtidas";
let stockProd5: number = 22;
let producto6: string = "Fideos";
let stockProd6: number = 30;
let producto7: string = "Harina";
let stockProd7: number = 40;
let precioProdu1: number = 150;

console.log("Nombre del Mercado: " + nombreDelMercado);
console.log("Productos disponibles");
console.log(producto1 + " Stock: " + stockProd1);
console.log(producto2 + " Stock: " + stockProd2);
console.log(producto3 + " Stock: " + stockProd3);
console.log(producto4 + " Stock: " + stockProd4);
console.log(producto5 + " Stock: " + stockProd5);
console.log(producto6 + " Stock: " + stockProd6);
console.log(producto7 + " Stock: " + stockProd7);

console.log("Compra realizada");
console.log(producto1 + " Stock:" + stockProd1);
console.log("Precio: " + precioProdu1);
console.log("Stock Actualizado: " + (stockProd1 - 1));
