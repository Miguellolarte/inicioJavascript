/** Tipos de variables */
/*
name="estiven";
console.log("El tipo de name es: ",typeof name);

var age=25;
console.log("El tipo de age es: ",typeof age);

var active=true;
console.log("El tipo de active es: ",typeof active);
*/


/** Converciones Numericas */
/*
var age2=parseInt(prompt("Ingrese su edad"));
if(isNaN(age2)){
    alert("Digite un numero");
}
else{
    alert("Su edad es: "+age2);
}
*/



/* ejercicio 1: mostrar la sumatoria media de los numeros introducidos por pantalla hasta que el numero sea negativo */
/*
var sum=0;
var average=0;
var count=0;
var num=25;
debugger;
while (num>=0) {
    num=parseInt(prompt("Ingrese un numero"));
    if(!isNaN(num && num>=0)){
        count++;
        sum+=num;
    }
    
}
average=sum/count;
alert("La sumatoria es: "+sum+"\n"+" ell promedio es: "+average);
*/




/** Mostrar todos los numeros que hay entre un rango inicial y un rango final suministrado por el usuario */
/*
var irank=parseInt(prompt("Ingrese el primer rango"));
var frank=parseInt(prompt("Ingrese en segundo rango"));
if(!isNaN(irank) && !isNaN(frank)&& irank>0 && frank>0 && irank<frank){
    document.write("<h1> De"+irank+" Hasta "+frank+" Existen los siguientes numeros: pares </h1>")
    for (let index = irank; index <= frank ; index++){
        if(index%2==0){
            console.log(index);
        document.write("<b>"+index+"</b><br>");
        }
        
    }
}
*/

/** Se pide por pantalla un numero y cuales son los divisores del numero solicitado */
/*
var num=parseInt(prompt("Ingrese un numero"));
if(isNaN(num)&& num>=0){
        document.write("<h1> los divisores de "+num+" son: </h1>");
        for (let index = 0; index <=num; index++) {
         if(num%index==0){
             document.write("<b>"+index+"</b><br>");
         }
        }
}
*/

/** ejercicio */
/*
var num=parseInt(prompt("Ingrese un numero"));
while(isNaN(num)){
    alert("Ingrese un numero");
    num=parseInt(prompt("Ingrese un numero"));
}
if(num%2==0){
    alert("es par");

}
else{
    alert("es impar");
}
*/
var count=0;
var name=prompt("imgrese el nombre de usuario");
var passworld=parseInt(prompt("Ingrese la contraseña"));
while(name){
    name="dahiana";
    alert("usuario incorecto");
    name=prompt("imgrese el nombre de usuario");
    count>=123456;
    
}
alert("usuarrio bloqueado");









/*
switch(nombre){
    case "dahiana":
    break;
    case "miguel":
    break;
    default:
    alert("Usuario Incorrecto");

    
}
*/

/* for (let index = 0; index <=5
        ; index++) {
       if(isNaN(contraseña)){
        alert("contraseña incorrecta");
 */