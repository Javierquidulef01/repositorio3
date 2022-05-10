let cantidadNros : number = Number(prompt("ingrese la cantidad de numeros a imprimir"));
let contador: number = 1;
let numero: number;
while (contador <= cantidadNros){
    numero = Number(prompt("ingrese un numero"));
    console.log ("el numero " + contador + " ingresado es: " + numero);
    contador+=1;
};
alert ("Listo! Los números fueron ingresados correctamente. Para verlos diríjase a la Consola");
