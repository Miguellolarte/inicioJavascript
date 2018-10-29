/* Realizar un escrip que pida al usuario dos numeros que diga cual es el mayor n
umero e identificar si los numeros son iguales 

var numero1= prompt("Digite el Primer numero")

var numero2= prompt("Digite el segundo numero")
if (numero1>numero2) {
    console.log("El numero mayor es",numero1);
}
else if(numero1<numero2){
    console.log("El numero mayor es",numero2);
}
*/

/* Ingresar por pantalla la edad de una persona 
si la personas es mayor a 18 años es mayor de edad de lo contrario es menor de edad
si tiene laedad menor o igual a 33 años "eres milenial"
si es mayor o igual a 70 "eres una ansiana"
si eres igual o mayor a 33 "ya no es un milenial" */

var edades= prompt("Ingrese su edad ")

function calcularEdad(edad)
{
if(edad>=18){
   
{
    console.log("Usted es mayor de edad");
    if(edad <= 33)
    {
        console.log("Usted es millenial".edad);
    } else if(edad >= 70)
    {
        console.log("usted es un anciano",edad);
    }else{
        console.log("usted ya no es millenial",edad);
    }
}
else
{
    console.log("usted es menor de edad",edad);
}
}
debugger;
calcularEdad(edades);
calcularEdad(23);
calcularEdad(89);
calcularEdad(15);
calcularEdad(67);
