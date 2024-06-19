import leia from "readline-sync"

var Nota = leia.questionFloat("INFORME NOTA: ");

if (Nota < 0 || Nota > 10) {
    console.log("NOTA INVALIDA");
} else {
    switch (Nota) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log("NOTA F")
            break;
        case 6:
            console.log("NOTA D")
            break;
        case 7:
            console.log("NOTA C")
            break;
        case 8:
            console.log("NOTA B")
            break;
        case 9:
        case 10:
            console.log("NOTA A")
            break;
        default:
            break;
    }
}
