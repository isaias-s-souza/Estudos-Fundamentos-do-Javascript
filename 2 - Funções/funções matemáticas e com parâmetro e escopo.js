var salarioDuCaboclo = 2870.00;
var diasEmQueEleTrabalha = 20;
var diaria;
function calcularDiariaDuCaboclo (salario, dias) {
    var diaria = salario / dias;
    return diaria;
}

console.log("Esse caboclo ganha por dia " + calcularDiariaDuCaboclo(salarioDuCaboclo, diasEmQueEleTrabalha).toFixed(2) + " reais");

// Demonstrativo de escopo em Javascript
console.log(diaria) // Undefined pois o valor da variável diaria não foi definida fora do escopo da função anterior.
