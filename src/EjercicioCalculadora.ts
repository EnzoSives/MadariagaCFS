let numero1: number = Number(prompt("Ingrese el primer numero"));
let numero2: number = Number(prompt("Ingrese el segundo numero"));
let operacion: number = Number(prompt("Ingrese una operacion"));

function dibujarLinea() {
  let linea: string = "";
  for (let i = 0; i < 40; i++) {
    linea = linea + "-";
  }
  console.log(linea);
}

function restar() {
  if (operacion === 1) {
    dibujarLinea();
    console.log("El resultado es: ", numero1 - numero2);
    dibujarLinea();
  }
}
function sumar() {
  if (operacion === 2) {
    dibujarLinea();
    console.log("El resultado es: ", numero1 + numero2);
    dibujarLinea();
  }
}
function multiplicar() {
  if (operacion === 3) {
    dibujarLinea();
    console.log("El resultado es: ", numero1 * numero2);
    dibujarLinea();
  }
}
function dividir() {
  if (operacion === 4) {
    dibujarLinea();
    console.log("El resultado es: ", numero1 / numero2);
    dibujarLinea();
  }
}

restar();

sumar();

multiplicar();

dividir();
