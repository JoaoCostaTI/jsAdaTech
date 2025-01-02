const fs = require('fs')

// * 1. Call Backs

// console.log('ANTES de Ler o arquivo')

// // Função Assincrona, ler um arquivo leva um tempo
// fs.readFile("arquivo.txt", (erro, conteudoDoArquivo) => {
//     if(erro){
//         console.log("Ocorreu um erro ao tentar ler o arquivo", erro)
//     }else{
//         console.log(String(conteudoDoArquivo))
//     }
// })

// console.log('DEPOIS da função de ler o arquivo')

// Exemplo 2 setTomeout (Função que cria um timer)

// console.log('ANTES do SetTimeOut')

// setTimeout(() => {
//     console.log('Isso sera executado apos 2s')
// }, 2 * 1000);

// console.log('DEPOIS do SetTimeOut')

// PROMISES

console.log('ANTES')

const promessa = new Promise((resolve, reject) => {
    fs.readFile("arquivo.txt", (erro, conteudoDoArquivo) => {
    if(erro){
        reject("Ocorreu um erro ao tentar ler o arquivo", erro)
    }else{
        resolve(String(conteudoDoArquivo))
    }
})
}) // criando uma promessa

promessa
.then((retornoDoResolveDarPromise) => {
    console.log('Deu certo: ', retornoDoResolveDarPromise)
}).catch((erro) => {
    console.log('Deu ruim:', erro)
}).finally(() => {
    console.log('Isso será SEMPRE EXECUTADO no final dela.')
})