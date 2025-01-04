"use strict";
let n = 20;
const pi = 3.1415;
let nome = "Joao";
let correta = true;
let resultado = n * pi;
// number[] | Array<number>
const numeros = [1, 2, 3, 4, 5];
//console.log(numeros[2])
const misto = ["2", 3, "5", 5];
const idades = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);
const menoresDeIdade = idades.filter((idade) => idade < 18);
console.log(menoresDeIdade);
const pessoaTupla = ['joao', 32];
const pessoa = {
    nome: 'Joao',
    idade: 31,
    altura: 1.76
};
console.log(pessoa);
const pessoa2 = {
    nome: 'Pedro',
    idade: 33,
    profissao: 'Empreendedor',
    altura: 1.78
};
function chooseNumber(n1, n2, criterio) {
    switch (criterio) {
        case 'greater':
            return n1 > n2 ? n1 : n2;
        case 'lower':
            return n1 < n2 ? n1 : n2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return n1;
            return n2;
    }
}
const numeroEscolhido = chooseNumber(10, 20, 'lower');
console.log(numeroEscolhido);
function somar(n1, n2) {
    return n1 + n2;
}
const pessoas = {
    '123.456.789-00': {
        nome: 'Fulano',
        idade: 28,
        altura: 1.76
    },
    '123.456.789-01': {
        nome: 'Ciclano',
        idade: 98,
        altura: 1.79
    }
};
