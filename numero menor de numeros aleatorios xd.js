/*
Generar 3 numeros aleatorios del rango de 0 a 19 y mostrar el menor 
*/
let num1 = Math.floor(Math.random()*20);
let num2 = Math.floor(Math.random()*20); 
let num3 = Math.floor(Math.random()*20); 
console.log(num1);
console.log(num2);
console.log(num3);

if(num1 < num2)
    if(num1<num3)
        console.log("el numero menor es el 1");
    else
        console.log("el numero menor es el 3");
    else 
        if(num2<num3)
            console.log("el numero menor es el 2");
    else 
        console.log("el numero menor es el 3");
