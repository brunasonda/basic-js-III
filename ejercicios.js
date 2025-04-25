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

function length1(bbq) {
  return bbq.length;
}
console.log("Barbecue has", length1("Barbecue"), "letters");


// 3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.

let star = "twinkle twinkle little star ✨";
function twinkle(star) {
  return star.toUpperCase(star);
}
console.log(twinkle(star));


// 4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.

let song = "How I wonder what you are? ✨";
function text(song) {
  return song.toLowerCase(song);
}
console.log(text(song));


// 5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.

function getChar(str, index) {
  return str[index];
}
console.log(getChar("Hola", 2));  


// 6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.

let invText = 'twinkle twinkle little star ✨';
function invert(invText) {
  return invText.split('').reverse().join('');
}
console.log(invert(invText));


// 7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.

let letterE = "Lets find out how many times the letter E appeared";
function countCharacter(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count++;
    }
  }
  return count;
}


console.log(letterE,":", countCharacter(letterE, 'e')); 

// 8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.

let spaces = "Lets get together";
function textWSpaces(str) {
  return str.replace(/ +/g, '');  
}
console.log(textWSpaces(spaces)); 


// 9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.

function itsPalindromo(cadena) {
  const texto = cadena.toLowerCase().replace(/\s/g, '');
  return texto === texto.split('').reverse().join('');
}
console.log(itsPalindromo("reconocer"));         
console.log(itsPalindromo("hola mundo"));  


// 10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.

function capitalizeWords(text) {
  const words = text.split(' ');  
  for (let i = 0; i < words.length; i++) {
    const firstLetter = words[i][0].toUpperCase();
    const restOfWord = words[i].slice(1).toLowerCase();
    words[i] = firstLetter + restOfWord;
  }  
  return words.join(' ');
}
console.log(capitalizeWords("hola soy un test")); 
console.log(capitalizeWords("buenos dias")); 


// ## Arrays:
// 1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.

function sumNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
const numbers = [0, 1, 2, 3, 4];
const total = sumNumbers(numbers);
console.log("El total es", total);


// 2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.

function calculateAverage(array) {
  if (array.length === 0) return 0; 
    let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum / array.length;
}
const numbers2 = [2, 4, 6];
const average = calculateAverage(numbers2);
console.log("El promedio es", average); 


// 3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.

let list = [5, 2, 9, 1, 3];
let sorted = list.sort((a, b) => a - b); 
console.log(sorted); 


// 4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.

function filterGreaterThan(numbers, threshold) {
  let result = [];
  for (let num of numbers) {
    if (num > threshold) {
      result.push(num);
    }
  }
  return result;
}
let numbers1 = [3, 8, 1, 10, 5];
let numberResult = filterGreaterThan(numbers1, 5);  
console.log(numberResult);  


// 5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
let sequenceA = [1, 2, 3];
let sequenceB = [4, 5];
let sequenceTogether = mergeArrays(sequenceA, sequenceB);
console.log(sequenceTogether); 


// 6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.

function getMaxNumber(numbers) {
  return Math.max(...numbers);
}
let showMeAllTheNumbers = [4, 9, 1, 7];
let maxNumber = getMaxNumber(showMeAllTheNumbers);
console.log("The max number is", maxNumber);  

// 7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.

function getMinNumber(numbers) {
  return Math.min(...numbers);
}
let showMeTheNumbers = [4, 9, 1, 7];
let minNumber = getMinNumber(showMeTheNumbers);
console.log("The min number is", minNumber);  

// 8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.

function countOccurrences(array, element) {
  let count = 0;
  for (let item of array) {
    if (item === element) {
      count++;
    }
  }
  return count;
}
const items = [1, 2, 3, 2, 4, 2];
const count = countOccurrences(items, 2);
console.log("1, 2, 3, 2, 4, 2: We see 2,", count, "times");


// 9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.

function removeDuplicates(originalArray) {
  return [...new Set(originalArray)];
}
const allNumbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(allNumbers);
console.log("Remove duplicates in 1, 2, 2, 3, 4, 4, 5",uniqueNumbers);


// 10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.

function reverseArray(array) {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}
const dogs = ['boxer', 'yorkshire', 'bulldog'];
console.log("Rearrange/reverse names of dogs: boxer, yorkshire and bulldog", reverseArray(dogs));


// ## Objetos literales:
// 1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.

function findName(object){
return object.name + object.apellido
}
const person = { name: "Bruna", apellido: " Sonda"};
console.log("My name is", findName(person));


// 2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.

function findAge(object){
  return object.age
  }
  const ageAtualization = { age: 33 };
  console.log("Im", findAge(ageAtualization), "years old",);


// 3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.

function putThis(object, prop) {
  object[prop] = null;
  return object;
}
const person2 = { name: "Mickey" };
putThis(person2, "lastName");      
console.log(person2);              


// 4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.

function removeProp(obj, prop) {
  delete obj[prop];
  return obj;
}
const person3 = {
  name: "Mickey",
  age: 96,
  lastName: "Mouse"
};
removeProp(person3, "age");
console.log(person3);


// 5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.

function countProperties(obj) {
  return Object.keys(obj).length;
}
const ppg = {
  name1: "Blossom",
  name2: "Bubbles",
  name3: "Buttercup"
};
console.log("How many Powerpuff Girls are there?",countProperties(ppg));


// 6. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.

function thisPropExist(theObject, theProp) {
  return theObject.hasOwnProperty(theProp); 
}
const myObject = {
  Name: "Mario",
  Age: 30,
  City: "Madrid"
};
console.log(thisPropExist(myObject, "Name"));     // true
console.log(thisPropExist(myObject, "Birthday")); // false


// 7. Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.

const mickeyMouse = {
  name: "Mickey Mouse",
  createdBy: "Walt Disney",
  yearCreated: 1928,
  wears: "red shorts and yellow shoes"
};
  function showCharacterInfo(character) {
  console.log("Name: " + character.name);
  console.log("Creator: " + character.createdBy);
  console.log("Year: " + character.yearCreated);
  console.log("Clothes: " + character.wears);
}
showCharacterInfo(mickeyMouse);

// 8. Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.

const apple = { color: "red", taste: "sweet" };
const banana = { color: "yellow", taste: "sweet" };
const anotherApple = { color: "red", taste: "sweet" };
function areSame(obj1, obj2) {
  return obj1.color === obj2.color && obj1.taste === obj2.taste;
}
console.log(areSame(apple, banana));       
console.log(areSame(apple, anotherApple)); 

// 9. Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.

const kiwi = { taste: "sweet" };
const copyKiwi = { taste: kiwi.taste }; 
console.log(kiwi);  
console.log(copyKiwi); 

// 10. Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.

const bananas = { color: "yellow", sweet: true };
const lemon = { color: "green", sour: true };
function mixFruits(a, b) {
  return {
    color: b.color || a.color,  
    sweet: a.sweet,
    sour: b.sour
  };
}
const mixed = mixFruits(bananas, lemon);
console.log(mixed); 