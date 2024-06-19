import leia from "readline-sync"

var Nota = leia.questionFloat("INFORME NOTA: ");

if (Nota >= 0.0 && Nota < 6.0){
    console.log("NOTA F");
}else if (Nota >= 6.0 && Nota < 7.0){
    console.log("NOTA D");
}else if (Nota >= 7.0 && Nota < 8.0){
    console.log("NOTA C");
}else if (Nota >= 8.0 && Nota < 9.0){
    console.log("NOTA B");
}else if (Nota >= 9.0 && Nota < 10.0){
    console.log("NOTA A");
} else {    
    console.log("NOTA INVALIDA");
}


