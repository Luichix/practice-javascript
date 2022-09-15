//STRINGS

let cadena = "Hola Mundo";

/* PROPIEDADES
    length = Devuelve la longitud de la cadena 
*/

console.log(cadena.length);

/* METODO
    toUpperCase () => Devuelve la cadena en mayuscula
*/

console.log(cadena.toUpperCase());

console.log(cadena);

let cadenaMayus = cadena.toUpperCase();

console.log(cadenaMayus);

/* METODO
    toLowerCase () => Devuelve la cadena en minusculas
*/

console.log(cadenaMayus.toLowerCase());

/*METODO
    indexOf() => Devuelve la posicion en la que se encuentra el string, si no lo encuentra devuelve -1
*/

console.log(cadena.indexOf("Hola"));
console.log(cadena.indexOf("M"));

/* METODO 
    replace() => Remplaza el fragmento de la cadena que le digamos y pone el valor nuevo
*/

console.log(cadena.replace("Mundo", "Youtube"));

/* METODO
    substring() => Extrae los caracteres desde inicio hasta el fin
*/

console.log(cadena.substring(3, 7));

/* METODO 
    slice() => Igual que substring pero admite valores negativos, si ponemos valores negativos empezara desde atras
*/

console.log(cadena.slice(-3));
console.log(cadena.slice(0, -6));

/* METODO
    trim() => Elimina los espacios al inicio y al final de la cadena
*/

let cadena2 = "    Hola youtube, estamos trabajando con cadenas     ";

console.log(cadena2);
console.log(cadena2.trim());

/* METODO
    startWith() => Sirve para saber si la cadena empieza con ese valor
*/

console.log(cadena.startsWith("H"));
console.log(cadena.startsWith("h"));
console.log(cadena.startsWith("M", 5));

/* METODO
    endsWitdh() => Sirve para saber si la cadena termina con ese valor  
*/

console.log(cadena.endsWith("o"));
console.log(cadena.endsWith("a", 4));
console.log(cadena.endsWith("n", 8));
console.log(cadena.endsWith("Mundo"));

/* METODO
    includes() => Igual que indexOf pero devuelve true o false  
*/

console.log(cadena.includes("M"));
console.log(cadena.includes("a", 5));
console.log(cadena.includes("a", 2));

/* METODO
  repeat() => Repite el string el numero de veces que le indiquemos  
*/

let cadena3 = "Hola ";

console.log(cadena3.repeat(3));

/* TEMPLATE STRINGS */

let nombre = "Juan";
let apellido = "Gomez";
let edad = 20;

console.log("Hola " + nombre + " " + apellido + ", tienes " + edad + " años.");
console.log(`Hola ${nombre} ${apellido}, tienes ${edad} años.`);
console.log(
  `Hola ${nombre} ${apellido}. El año que viene tendras ${edad + 1} años.`
);
