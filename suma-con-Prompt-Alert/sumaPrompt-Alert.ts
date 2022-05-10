let btnReset = document.getElementById("btnReiniciar");
btnReset.addEventListener("click", () => {

let numero1 : number = Number (prompt("Ingrese un numero"));
let numero2 : number = Number (prompt("Ingrese un numero"));

alert("el resultado de la suma es: " + (numero1+numero2));
});

// el valor de prompt siempre sera STRING por eso usar funcion Number(prompt())

// alert (numero) muestra el valor de la variable numero.
// alert ("mensaje", numero) muestra solo el mensaje pero no el valor de numero
// alert ("mensaje" + numero) muestra el mensaje y el valor de numero
// alert ("mensaje" + numero1 + numero2) muestra el mensaje, el numero1 y el numero2 concatenado como string

// muestra mensaje y suma  


//alert("el numero ingresado es: "+ (numero1 + numero2) + (numero1) + (numero2)) 
// numero1 = 2 y numero2 = 4
// muestra -->  el numero ingresado es: sumanumero1numero2 o sea 628

//var anios = 30;
//alert("Tengo " + anios + " años"); 