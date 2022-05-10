let sumatoria : number = 0;

for (let i : number = 1; i <= 10; i++ ){
    let numero : number = Number(prompt("ingrese un numero: "));
    console.log ("numero ", i , " ingresado: ", numero);
    sumatoria+=numero;
}

alert("La sumatoria de los numeros ingresados es: " + sumatoria);
alert("para ver los numeros ingresados ir a la consola")
console.log("total sumatoria: ",sumatoria);
