let calculo1 = parseInt (prompt("Ingrese un numero"));
let operacion = prompt("Ingrese una operacion +-*/");
let calculo2 = parseInt (prompt("Ingrese un numero"));

let resultado;

switch (operacion) {
    case "+":
        resultado=(calculo1 + calculo2)
        alert ("Su resultado es " + resultado);
        break;
    case "-":
        resultado=(calculo1 - calculo2)
        alert ("Su resultado es " + resultado);
        break;
    case "*":
        resultado=(calculo1 * calculo2)
        alert ("Su resultado es " + resultado);
        break;
     case "/": 
        resultado=(calculo1 / calculo2)
        if (calculo2>0) {
            alert ("Su resultado es " + resultado); 
        }else{
            alert ("Error, no se puede dividir entre 0");
        }
        default: 
        alert ("Error, ingrese una operacion valida");
        break;
}