/**3. Realizar la suma de N numeros ingresados por el usuario. 
 
 * Sara Otero Useche */


'use strict';

function calcularSuma(numeros) {
    const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números a sumar:")); 
    let suma = 0;   
    for (String (i) = 0; i < n; i++){
        suma += numero;
    }
    return suma;
}
const numeros = [];

for (let i = 0; i < cantidadNumeros; i++) {
    const numero = parseFloat(prompt(`Ingrese el número  + (i + 1) + ":"  `));
    numeros.push(numero);
}

const sumaTotal = calcularSuma(numeros);

console.log("Los números ingresados son:", numeros);
console.log("La suma de los números es:", sumaTotal);

