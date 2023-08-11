/**2,Calcular el sueldo a pagar de un trabajador dado que se debe ingresar la cantidad de horas trabajadas  
 * y el valor de la hora en pesos.
 
  Sara Otero Useche

// Función para calcular el sueldo*/
'use strict';

function calcularSueldo(horasTrabajadas, valorHora) {
    return horasTrabajadas * valorHora;
}
horasTrabajadas

const nombreTrabajador = prompt("Ingrese su nombre: ");
const horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas: "));
const valorHora = parseFloat(prompt("Ingrese el valor de la hora en pesos:"));

const sueldo = calcularSueldo(horasTrabajadas, valorHora);

console.log("¡Hola", nombreTrabajador, "!");
console.log("Has trabajado", horasTrabajadas, "horas esta semana.");
console.log("Tu sueldo a pagar es de:", sueldo, "pesos.");




  


  