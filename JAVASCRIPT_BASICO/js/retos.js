/*
Taller 2 JavaScript retos

RETO 1

¡La abuela tiene horno nuevo! y ha planeado hacer una 
deliciosa torta de vainilla con relleno de crema y fresas.
 La receta dice que debe precalentar el horno a 350 °F (grados fahrenheit),
  pero su horno muestra la temperatura en °C (grados Centígrados). 
Ayúdale a la abuela a colocar la temperatura correcta. Cree un programa en 
JavaScript que convierta de grados Fahrenheit (°F) a Centígrados (°C),
 teniendo en cuenta lo siguiente: 



RETO 2

Escribir un algoritmo para saber si el número ingresado por teclado es positivo o negativo.
Escribir un algoritmo que reciba dos números por teclado y diga cuál es el mayor y cuál el menor.
Escriba un programa que lea tres números enteros positivos y que calcule e imprima en pantalla el menor y el mayor de ellos.

 */
//------------------------------------------------------------------------------------

 let temperatura =prompt("por favor ingresa la temperatura en grados fahrenheit");

 let c= (temperatura-32)/1.8;

 alert("C°"+ c);
//---------------------------------------------------------------------------------
  
let ingrenum =prompt("ingresa un numero para que el programa determine si es positivo o negativo");
if (ingrenum<=0) {
    alert("el numero es (cero) o negativo");
} else {
    alert("el numero es postivo");
}
//-------------------------------------------------------------------------------

let num1 =prompt(" PROGRAMA QUE DETERMINA EL NUMERO + >  ingresa un numero #1 ");
let num2 =prompt("ingresa un numero #2");

if (num1>num2) {
    alert("el numero #1 es mayor que el #2");
} else {
    alert("el numero #2 es mayor que el #1");

}

//------------------------------------------------------------------------------
let numuno =prompt(" PROGRAMA QUE DETERMINA EL NUMERO + Y - DE 3 NUMEROS  ingresa un numero ###1 ");
let numdos =prompt("ingresa un numero ###2");
let numtres =prompt("ingresa un numero ###3");

if (numuno>numdos) {
    alert("el numero mayor es el numero #1","=>",numuno);
} else {
    if (numdos>numtres) {
        alert("el numero mayor es el numero #2","=>",numdos);
    } else {
        alert("el numero mayor es el numero #3","=>",numtres);




    }



}

if (numuno<numdos) {
            alert("el numero menor es el numero #1","=>","numuno");
        } else {
            if (numdos<numtre) {
                alert("el numero menor es el numero #2","=>","numdos");
            } else {
              alert("el numero menor es el numero #3","=>","numtres");
            }
        }


//---------------------------------------------------------------


 