/*Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.*/


let numeroMagico;
let intentos;

// Manejador de evento para el botón "Comenzar"
document.getElementById("comenzar").addEventListener("click", function(){
    intentos = 0;
    numeroMagico = Math.floor(Math.random() * 10) + 1;
    document.getElementById("adivina").className = "block";
    document.className="btn"
    let boton = document.querySelector("button")
    boton.className="displayNone"
});


document.getElementById("enviar").addEventListener("click", function(){
    intentos++;
    let numeroIngresado = document.getElementById("numero").value;
   
    if (numeroIngresado < 1 || numeroIngresado > 10) {
        alert("El número ingresado está fuera del rango permitido. Inténtalo de nuevo.");
    } else if (numeroIngresado == numeroMagico) {
        alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
        document.getElementById("adivina").className = "block";
    } else if (numeroIngresado < numeroMagico) {
        alert("El número ingresado es menor al número mágico. Inténtalo de nuevo.");
    } else {
        alert("El número ingresado es mayor al número mágico. Inténtalo de nuevo.");
    }
});