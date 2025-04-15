// ## Números:
// 1. Escribe una función que tome dos números como argumentos y devuelva su suma.

let a = 1;
let b = 2;

function sum(a, b) {
  return a + b;
}

let result1 = sum(a, b);
console.log(a, "+", b, "=", result1);


// 2. Escribe una función que tome dos números como argumentos y devuelva su resta.

let c = 10;
let d = 2;

function min(c, d) {
  return c - d;
}

let result2 = min(c, d);
console.log(c, "-", d, "=", result2);


// 3. Escribe una función que tome dos números como argumentos y devuelva su producto.

let e = 20;
let f = 2;

function mult(e, f) {
  return e * f;
}

let result3 = mult(e, f);
console.log(e, "*", f, "=", result3);


// 4. Escribe una función que tome dos números como argumentos y devuelva su división.

let g = 20;
let h = 2;

function div(g, h) {
  return g / h;
}

let result4 = div(g, h);
console.log(g, "/", h, "=", result4);


// 5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.

let i = 3;
let j = 3;

function exp(i, j) {
  return i ** j;
}

let result5 = exp(i, j);
console.log(i, "^", j, "=", result5);


// 6. Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.

let k = 13;
let l = 3;

function resto(k, l) {
  return k % l;
}

let result6 = resto(k, l);
console.log(k, "%", l, "=", result6);


// 7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.

let raiz = 81;
let resultadoFinal = raiz / 2; 

for (let i = 0; i < 10; i++) {
  resultadoFinal = (resultadoFinal + raiz / resultadoFinal) / 2; 
}

console.log("√",raiz, "=", resultadoFinal)

// 8. Escribe una función que tome un número como argumento y devuelva su valor absoluto.

let o = -5;
function abs(o) {
  if (o < 0) {
    return -o;  
  } else {
    return o;  
  }
}


// 9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.

console.log("|",o, "|", "=", abs(o));

let q = 3.555;
let r = 10.123;
function round(numberRounded) {

  if (numberRounded >= 0) {
    return (numberRounded + 0.5) - (numberRounded + 0.5) % 1; 
  } else {
    return (numberRounded - 0.5) - (numberRounded - 0.5) % 1; 
  }
}

console.log(q, "ahora es", round(q)); 
console.log(r, "ahora es", round(r)); 


// 10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.


function numRandom(min, max) {
  let num = Math.random() * (max - min);
  return num + min;
}

console.log(numRandom(0, 1));
console.log(numRandom(0, 1));
console.log(numRandom(0, 1));

//## Letras:
// 1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.

function concatenateNames(name1, name2) {
  return name1 + " " + name2;
}

const myNameIs = "Bruna Helen";
const mySecondNameIs = "Sonda Santos";

const fullName = concatenateNames(myNameIs, mySecondNameIs);
console.log("My name is:", fullName);

// 2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.

function names(name3, lenght) {
  const bigName = name3.lenght ;
  lenght = name3.lenght
  console.log(name3, "has", name3.lenght);
  
  
// 3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.
// 4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.
// 5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.
// 6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.
// 7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.
// 8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.
// 9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.
// 10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.


// ## Arrays:
// 1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.
// 2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.
// 3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.
// 4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.
// 5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.
// 6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.
// 7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.
// 8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.
// 9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.
// 10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.

// ## Objetos literales:
// 1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.
// 2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.
// 3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.
// 4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.
// 5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.
// 6. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.
// 7. Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.
// 8. Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.
// 9. Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.
// 10. Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.
