// Uso de operaciones relacionales 
        // Con numero y booleanos   

let edad = 14

console.log(edad >= 18);

// Declara Variable number e imprmir true si es impar 
// false si es par

let number = 20

console.log(number % 2 == 1); // Aqui la variable  number 
// se saca su residuo y se compara con 1 ya que las diviciones
//de numero pares da 0


// Uso de Strings

let nombre = 'Pepe'

console.log('Hola ' + nombre) // Concatenación

// Operaciones relacionales de Strings

// IGUAL ==  NO IGUALDAD !=  MAYOR QUE >   
// MENOR QUE <  MAYOR IGUAL >=  MENOR IGUAL <=

console.log('David' == 'David') // true

console.log(97 > 56) // true


console.log('Hola mundo'.length) // Longitud de cadena (10)

        // .length es para saber la longitud de una cadena
        // Despues de un punto sigue una propiedad

  // E J E R C I C I O        

    //Crea dos variables; nombre1, nombre2
    //Dentro nombre de persona 
    //Imprimir en pantalla true si la longitud de nombre1
    // es mayor que nombre2, y false si el lo contrario

    let nombre1 = 'Berenice'.length
    
    let nombre2 = 'Carolina'.length

    function longitud(nombre1, nombre2){
        var nombre1 >= nombre2;
    }
    console.log()  // Mi intento fallido

// E J E M P L O 

let nombre1 = 'Berenice'  // Definimos la variable
    
let nombre2 = 'Caro'  // Definimos la varible

let longitudNombre = nombre1.length // (- 8) Se crea nueva variable con logitud de caracteres usando .length
let longitudNombre2 = nombre2.length // (- 4) Simil a linea anterior

console.log(longitudNombre > longitudNombre2) //(- true)Imprimimos en pantalla si longitudNombre es mayor que longitudNombre2

