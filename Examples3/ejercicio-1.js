// Variables y Funciones

var nombre = 'pepe'

function saluda(){
    console.log('Hola ' + nombre);
}

// Se invoca saluda(nombre)


// F U N C I O N E S 

function noRetorna(){   // Función que no retorna
    var sinRetorno = 'NO'
}
function siRetorna(){   // Si retorna
    return 21;
}
var retor= siRetorna(); // Asigna variable a siRetorna para poder obtener valor

    retor // R 21