import leia from "readline-sync"

var Nota1 = leia.questionFloat("INFORME NOTA 1: ");
var Peso1 = leia.questionFloat("INFORME PESO NOTA 1: ");
var Nota2 = leia.questionFloat("INFORME NOTA 2: ");
var Peso2 = leia.questionFloat("INFORME PESO NOTA 2: ");
var Nota3 = leia.questionFloat("INFORME NOTA 3: ");
var Peso3 = leia.questionFloat("INFORME PESO NOTA 3: ");

var mediaPonderada = ((Nota1 * Peso1) + (Nota2 * Peso2) + (Nota3 * Peso3)) / (Peso1 + Peso2 + Peso3)

console.log("MEDIA PONDERADA E " + mediaPonderada)