import leia from "readline-sync"

var lado1 = leia.questionInt("INFORME TAMANHO LADO 1: ");
var lado2 = leia.questionInt("INFORME TAMANHO LADO 2: ");
var lado3 = leia.questionInt("INFORME TAMANHO LADO 3: ");

if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
    if (lado1 === lado2 && lado1 === lado3) {
        console.log("EQUILÁTERO");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("ISÓSCELES");
    } else {
        console.log("ESCALENO");
    }
} else {
    console.log("NAO E UM TRIANGULO VALIDO")
}