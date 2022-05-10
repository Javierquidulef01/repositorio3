var cantidadNros = Number(prompt("ingrese la cantidad de numeros a imprimir"));
var contador = 1;
var numero;
while (contador <= cantidadNros) {
    numero = Number(prompt("ingrese un numero"));
    console.log("el numero " + contador + " ingresado es: " + numero);
    contador += 1;
}
;
alert("Listo! Los números fueron ingresados correctamente. Para verlos diríjase a la Consola");
