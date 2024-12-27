const prompt = require('readline-sync')

//const idade = prompt.question('Qual e sua idade ?')

//const idadeNumber = Number(idade)

//console.log(idadeNumber, typeof(idadeNumber))

// Coerção Explicita

console.log(Number('X'))

console.log(String(10), typeof (String(10)))

console.log(Boolean(2))

// Coerção Implícita

console.log(1 + '1')
console.log(10 - '5')