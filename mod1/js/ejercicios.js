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





/*


var password="123456";
var user="dayana";
var name=prompt("ingrese su usuario");
var pass=prompt("ingrese su contraseña");
var count=0;
function loginuser(name,pass){
while (name!=user && pass!=password) {
        alert("La informacion que ingreso es incorecta");
        var name=prompt("ingrese su usuario");
        var pass=prompt("ingrese su contraseña");
        count++;
        if (count>=5) {
            alert("su usuario da sido bloqueado");
            break;
        }


}
}
loginuser(name,pass);
if(count>=5){
    var conf=confirm("desea cambiar su contraseña");
if(conf==true){
    var name=prompt("ingrese su usuario");
    var pass2=prompt("Ingese nueva contraseña");
    password=pass2;
    loginuser(name,pass2);
}
}



*/


/*

var number1;
var number2;
number2=0;
number1=parseInt(prompt("Ingrese el priemr numero"));

for(number2=0; number2<=10; number2++){
    if (numero2%1===0){
        document.write("<br>"+number1+" * "+number2+" = "+(number1*number2));
    } {
        
    }
}

*/
var num;
var i;
var num2;
num=parseInt(prompt("Priemr numero"));
num2=parseInt(prompt("Ingrese hasta que tabla quiere llegar"));
for (let index = 0; index <num2; index++) {
    
    for(i=1 ; i<=10 ; i++){
        mul=num*i;
        document.write(num," X ",i," = ",mul,"<br>")    
       
}

}




/*

var numero1;
var numero2;
number1=parseInt(prompt("ingrese un numero"));
number2=parseInt(prompt("ingrese el segundo numero"));
var y=number2;
var x=number1;
document.write("<h1>el resultado del numero que ingreso es </h1>");
for(x=1; x<= 0; x++){
    for(y=1; y<=0; y++){
        tabel=y*x; 
document.write("<h2> el numero"+x+" Multiplicado por"+y+" es igual a "+table+"\n");
    }
}
*/