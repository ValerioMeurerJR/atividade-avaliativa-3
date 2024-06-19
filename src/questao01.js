import leia from "readline-sync"
const formatador = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

var valor = leia.questionFloat("INFORME O VALOR DO PRODUTO: R$ ");
if (valor <= 20.00) {
    valor = valor * 1.45;
} else {
    valor = valor * 1.30;
}
console.log("VALOR DO PRODUTO E DE " + formatador.format(valor));