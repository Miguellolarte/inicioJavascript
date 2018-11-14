/*
function CalculatePow (base,power) {
    var result=Math.pow(base,power);
    document.write("<h1>"+base+"elevado a "+power+" es igual a"+ result+"</h1>");
}


function setValue(){
    var base=parseInt(prompt("Ingrese la base"));
    var power=parseInt(prompt("Ingrese la potencia"));


    while (isNaN(base) || base<=0 || power<=0 || isNaN(power)){
        alert("Solo puede ingresar numeros");
         base=parseInt(prompt("Ingrese la base"));
         power=parseInt(prompt("Ingrese la potencia"));
    }
    CalculatePow(base,power);
}
setValue();
//Utilizando funciones resolver la siguiente ecuación ax^2+bx+c
*/

function CalculateAll(a,b,c){
    var result=Math.pow(a,b,c);
    var operation=  a*x1^2+b*x2+c;
    document.write("<h1>"+a+" por "+unox+" elevado al cuadrado mas "+b+" por "+dosx+" mas"+c+"</h1>");
}
function setValue(){
    var a=parseInt(prompt("Ingrese el valor de a"));
    var b=parseInt(prompt("Ingrese el valor de b"));
    var c=parseInt(prompt("Ingrese el valor de c"));
    var x1=parseInt(prompt("Ingrese el valor de la primera x"));
    var x2=parseInt(prompt("Ingrese el valor de la segunda x"));
    
}

if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(x1) || isNaN(x2)) {
    one=a+x1;
    two=Math.pow(one,2);
    finish=two+b*x2+c;
}
alert(finish);

