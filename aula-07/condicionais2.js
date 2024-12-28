
const prompt = require('readline-sync')

const permicoes = prompt.question('Qual seu perfil? ')

switch(permicoes){
    case "aluno":
        console.log('Perfil Aluno selecionado ')
        break
    case "prof":
        console.log('Perfil Professor selecionado ')
        break
    case "adm":
        console.log('Perfil Administrador selecionado ')
        break
}