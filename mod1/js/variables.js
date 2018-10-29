/*Pedir datos por teclado */

/*
var nombre= prompt("Ingrese su nombre");
console.log("Este es mi nombre",nombre);
alert(nombre);
*/

/*
var edad= prompt("Ingrese su edad");
console.log("Esta es mi edad",edad);
alert(edad);
*/


/* Variable numerica */

var num= 5;
console.log("num",num);

//**variables de texto */
var palabras= "palabras";
console.log("palabras",palabras);

//** Variables vooleanas */

var activo= true;
console.log("activo",activo);

//** variables tipo arreglo */

var colores= ["red","cyan",activo,num];
console.log("colores",colores);

//** variables tipo objeto u object */

var vehiculo={
        tipo:"Automovil",
        modelo:2018,
        usado:true
};
console.log("vehiculo",vehiculo);
console.log("tipo de vehiculo",vehiculo);

var nombre= "juliana";
console.log("nombre",nombre);
nombre= true;
console.log("nombre",nombre);
nombre=20;
console.log("nombre",nombre);

/* definicion entre var y let */

var apellido="lola";
console.log("apellido",apellido);
apellido=14;
console.log("apellido Numerico",apellido);
if(true){
    apellido="pinches";
    console.log("Apellido dentro del if", apellido);

}
console.log("apellido fuera del if", apellido);

var cantidad=34;
console.log("Cantidad Num",cantidad);
if(true){
    let cantidad=60;
    console.log("Cantidad demtro del if", cantidad);

}
console.log("Cantidad fuera del id",cantidad);
/* Constantes 
const edad;
edad=15;
console.log("Edad const",edad)
edad=35;
console.log("Constantes edad",edad);
*/

/* Concatenacion de variables */

var Anio=2018;
var promedio="25";
console.log("La concatenacion de "+Anio+" y "+promedio+" es " ,Anio+Number(promedio));

let numero1=25;
let numero2=40;
console.log("la concatenacion de ",String(numero1)+String(numero2));


/* Ventanas */ 
/** alerta */
alert("la concatenacion de "+String(numero1)+String(numero2));
/**prompt */
var modelo= prompt("El modelo del carro es",2018);
/** Cont */
var Cont=confirm("Desea salir de la aplicacion")
console.log("Confirmacion",Cont);

