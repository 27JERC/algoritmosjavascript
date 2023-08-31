function saludo() {
    alert("Bienvenido a mi website con bootstrap y Js")
}

function suma() {
    let A = 0;
    let B = 0;
    let S = 0;

    A = parseInt(prompt("Por favor ingrese el primer valor a sumar"));
    B = parseInt(prompt("Por favor ingrese el segundo valor a sumar"));
    
    S = (A + B);

    alert("El resultado es: " + S);
}

function operaciones() {
    let A = 0;
    let B = 0;
    S = 0;
    R = 0;
    M = 0;
    D = 0;

    A = parseInt(prompt("Ingrese un valor"));
    B = parseInt(prompt("Ingrese otro valor"));

    S = A+B;
    R = A-B;
    M = A*B;
    D = A/B;

    alert("El resultado de la SUMA es: "+ S + " \nEl resultado de la RESTA es: "+ R + " \nEl resultado de la MULTIPLICACIÓN es: "+ M + " \nEl resultado de la DIVISIÓN es: "+ D );
    
}

function mayor() {
    alert("Algoritmo que determinará el número mayor de dos números");

    let A = 0;
    let B = 0;

    A = parseInt(prompt("Ingrese el primer valor"));
    B = parseInt(prompt("Ingrese el segundo valor"));

    if (A==B) {
        alert("Los números son iguales");
    } else if(A>B) {
        alert("El número "+A+" es mayor al número "+B);
    } else{
        alert ("El numero "+B+" es mayor al número "+A );
    }
} 

function menor() {
    alert("Algoritmo que determinará el número menor de tres números");
    let A = 0;
    let B = 0;
    let C = 0;

    A=parseInt(prompt("Ingrese el primer valor"));
    B=parseInt(prompt("Ingrese el segundo valor"));
    C=parseInt(prompt("Ingrese el tercer valor"));

    if ((A==B) && (A==C)) {
        alert("Los tres números son iguales")
    } 
    else if((A<B) && (A<C)){
        alert("El número menor es: " +A )
    }
    else if((B<A) && (B<C)){
        alert("El número menor es: " +B )
    }else{
        alert("El número menor es: " +C )
    }

    
}

function promedio() {
    nom = prompt("Ingrese su nombre");
    mat = prompt("Ingrese la materia");
    let N1 = parseInt(prompt("Ingrese la primer nota"));
    let N2 = parseInt(prompt("Ingrese la segunda nota"));
    let N3 = parseInt(prompt("Ingrese la tercera nota"));
    let N4 = parseInt(prompt("Ingrese la cuarta nota"));
    let N5 = parseInt(prompt("Ingrese la quinta nota"));
    let N6 = parseInt(prompt("Ingrese la sexta nota"));
    let N7 = parseInt(prompt("Ingrese la septima nota"));
    let prom = 0;




    prom = (N1 + N2 + N3 + N4 + N5 + N6 + N7)/7;
    if (prom>=6) {
        alert("Hola " + nom + ", aprobó la materia de " + mat + " con un promedio de: " + prom);    
    } else{
        alert("Hola " + nom + ", reprobó la materia de " + mat + " con un promedio de: " + prom);
    }
}

function conversion() {
    let dolar = parseInt(prompt("¿Cuántos dolares desea convertir?"));
    COP = 4100;
    EUR = 0.92;
    SOL = 3.72;
    CONA = dolar*COP;
    CONB = dolar*EUR;
    CONC = dolar*SOL;

    alert("Dolar a Peso Colombiano: "+CONA+ "\nDolar a Euro: "+CONB+ "\nDolar a Sol: "+CONC);

}

function cdt() {
    let cap = parseInt(prompt("¿Cuánto capital desea invertir?"));
    let año = parseInt(prompt("¿Cuantos años desea estar?"));
    let cdt = 0;

    cdt=cap*(0.013)*(año*12);

    alert("esto es igual "+cdt);
    
}

function panelLateral() {
    const panel = document.getElementById("panel-lateral");

    panel.classList.toggle("active");
    
}

function circulo() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("circulo");
}
function triangulo() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("triangulo");
}
function rombo() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("rombo");
}
function degradado() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("degradado");
}
function horizontal() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("horizontal");
}
function vertical() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("vertical");
}
function moveTop(){
    const figura = document.querySelector("#figura");

    figura.classList.toggle("top");
}
function moveRight(){
    const figura2 = document.querySelector("#figura");

    figura.classList.toggle("right");
}
function moveLeft(){
    const figura = document.querySelector("#figura");

    figura.classList.toggle("left");
}
function moveBottom(){
    const figura = document.querySelector("#figura");

    figura.classList.toggle("bottom");
}










// el colegio ABC requiere un algoitmo o un sistema que permita a los diferentes estudiantes ingresar su nombre, materia y 7 calificaciones y este le indique si aprobo o reprobo la materia teniendo en cuenta que se apueba si el puntaje es mayor o igual a 6 notas de 1 a 10

// <!-- SE REQUIERE UN SISTEMA O ALGORTMO QUE AL INGRESAR EL VALOR EN DOLARES NOS INDIQUE A CUANTOS PESOS COLOMBIANOS EQUIVALEN, EUROS, SOLES -->

// un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganará despues de n numero de años, teniendo en cuenta que el banco paga un interes de 1.3% mensual