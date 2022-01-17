//let producto1 = promt("Ingrese un Producto");
//let producto1Stock: number =Number(promt("Ingrese Stock de Producto"));
//let producto1Precio: number =Number(promt("Ingrese Precio de Producto"));
//let producto2 = promt("Ingrese un Producto");
//let producto2Stock: number =Number(promt("Ingrese Stock de Producto"));
//let producto2Precio: number =Number(promt("Ingrese Precio de Producto"));
//let producto3 = promt("Ingrese un Producto");
//let producto3Stock: number =Number(promt("Ingrese Stock de Producto"));
//let producto3Precio: number =Number(promt("Ingrese Precio de Producto"));

console.log("BIENVENIDO AL MERCADO ENZO");
console.log("==========================");
console.log("Los Productos disponibles son: ");
console.log(
  "Producto: " +
    producto1 +
    "Stock: " +
    producto1Stock +
    "Precio: " +
    producto1Precio
);
console.log(
  "Producto: " +
    producto2 +
    "Stock: " +
    producto2Stock +
    "Precio: " +
    producto2Precio
);
console.log(
  "Producto: " +
    producto3 +
    "Stock: " +
    producto3Stock +
    "Precio: " +
    producto3Precio
);

//let productoSeleccionado: number = Number(promt("Ingrese 1 para Comprar Gaseosa,Ingrese 2 para comprar Galletitas,Ingrese 3 para comprar Azucar"));
//let cantProducto: number = Number(promt("Ingrese la cantidad que desea comprar");

if (productoSeleccionado === 1) {
  console.log(" Selecciono Gaseosa su precio es: " + producto1Precio);
  console.log("Stock restante: ", producto1Stock - cantProducto);
} else if (productoSeleccionado === 2) {
  console.log(" Selecciono Galletitas su precio es: " + producto2Precio);
  console.log("Stock restante: ", producto2Stock - cantProducto);
} else if (productoSeleccionado === 3) {
  console.log(" Selecciono Azucar su precio es: " + producto3Precio);
  console.log("Stock restante: ", producto3Stock - cantProducto);
} else {
  console.log("El producto seleccionado no esta disponible");
}
