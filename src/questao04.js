import leia from "readline-sync"

var Nota = leia.questionFloat("INFORME NOTA: ");

if (Nota < 0.0 || Nota > 10.0) {
    console.log("NOTA INVALIDA");
} else {
    switch (Nota) {
        case 1.0:
        case 2.0:
        case 3.0:
        case 4.0:
        case 5.0:
            console.log("NOTA F")
            break;
        case 6.0:
            console.log("NOTA D")
            break;
        case 7.0:
            console.log("NOTA C")
            break;
        case 8.0:
            console.log("NOTA B")
            break;
        case 9.0:
        case 10.0:
            console.log("NOTA A")
            break;
        default:
            break;
    }
}
