const fs = require('fs')

// * 1. Call Backs

// Função Assincrona, ler um arquivo leva um tempo
fs.readFile('aula-13/arquivo.txt', (erro, conteudoDoArquivo) => {
    if(erro){
        console.log('Ocorreu um erro ao tentar ler o arquivo', erro)
    }else{
        console.log(String(conteudoDoArquivo))
    }
})

