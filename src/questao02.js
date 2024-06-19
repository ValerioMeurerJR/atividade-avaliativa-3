import leia from "readline-sync"
const formatador = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
 
var qntHoras = leia.questionInt("INFORME QNT DE HORAS: ");
var valorHora = leia.questionFloat("INFORME VALOR DE HORA: ");
var percDesconto = leia.questionFloat("INFORME PERCENTUAL DE DESCONTO: ");

var salBruto = qntHoras * valorHora;
var desconto = salBruto * (percDesconto / 100);
var SalLiquido = salBruto - desconto;

console.log("SALARIO BRUTO: " + formatador.format(salBruto))
console.log("DESCONTO: " + formatador.format(desconto))
console.log("SALARIO LIQUIDO: " + formatador.format(SalLiquido))