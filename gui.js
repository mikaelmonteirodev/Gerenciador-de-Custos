function imprimeExtrato(lista){
    [{
        nome: "",
        valor: 5,
        data: new Date(),
    }]
}

let gastosTotais = 0;

console.log("Extrato de gastos:");
expenses.forEach(expense => {
  console.log(`Valor: ${expense.value} | Data: ${expense.date} | Tipo: ${expense.type}`);
  gastosTotais += expense.value;
});

console.log(`Total de gastos: ${gastosTotais}`);