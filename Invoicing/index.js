var fat = require('./data.json')

let numbers = fat.map(e => e.valor).filter(n => n > 0);

let max = Math.max(...numbers);

let min = Math.min(...numbers);

let sum = numbers.reduce((total, number) => total + number, 0)

let average = sum / 30;

let betterData = numbers.filter(n => n > average);

console.log(`
Menor faturamento do mês: ${min}.
Maior faturamento do mês: ${max}.
Valores que os faturamentos diários foram maior que a média mensal:
${betterData}.`)