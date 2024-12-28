// Operadores Booleanos são baseados em comparações

const n1 = 10
const n2 = 12

console.log(n1 == n2)
console.log(n1 === n2)
console.log(n1 == '10')

console.log(n1 > n2) 


const iP1 = 17
const iP2 = 29

if (iP1 >= 18 && iP2 >= 18){
    console.log('Pessoa 1 e Pessoa 2 tem mais de 18 anos')
}else{
    console.log('Ambas são menores de idade')
}

console.log(!(iP1 >= 18))