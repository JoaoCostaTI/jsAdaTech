let n = 20

const pi = 3.1415

let nome: string = "Joao"

let correta: boolean = true

let resultado = n * pi

// number[] | Array<number>
const numeros: number[] = [1,2,3,4,5]

//console.log(numeros[2])

const misto: (number | string)[] = ["2", 3, "5", 5]

const idades: number[] = []

idades.push(23)
idades.push(38)
idades.push(12)
idades.push(49)
idades.push(16)

const menoresDeIdade = idades.filter((idade) => idade < 18)

console.log(menoresDeIdade)

const pessoaTupla: [string, number] = ['joao', 32]

// object types

//interfaces
// tipo costumizado

interface Person{
    nome: string,
    idade: number,
    profissao?: string,
    altura: number
}

const pessoa: Person = {
    nome: 'Joao',
    idade: 31,
    altura: 1.76
}

console.log(pessoa)

// Type

type MyString = string

type PersonT = {
    nome: string,
    idade: number,
    profissao?: string,
    altura: number
}

const pessoa2: PersonT = {
    nome: 'Pedro',
    idade: 33,
    profissao: 'Empreendedor',
    altura: 1.78
}

type Criterio = "greater" | "lower"

function chooseNumber(n1: number, n2: number, criterio?: Criterio): number{

    switch(criterio){
        case 'greater':
            return n1 > n2 ? n1 : n2 
            
        case 'lower':
            return n1 < n2 ? n1 : n2
            
        default:
            const numeroAleatorio = Math.random()

            if(numeroAleatorio >= 0.5) return n1
            return n2
    } 
}

const numeroEscolhido = chooseNumber(10, 20,'lower')

console.log(numeroEscolhido)

function somar(n1: number, n2: number): number{
    return n1 + n2
}

// Utility Types: A ideia deles é permitir que você crie novos tipos a partir de tipos já existentes. 

// 1. Partial

type PersonPartial = Partial<Person>

// 2. Required

type PersonRequired = Required<Person>

// 3. Pick

type PersonPicked = Pick<Person,'idade'|'altura'>

// 4. Omit

type PersonOmit = Omit<Person, 'altura' | 'profissao'>

// 5. Exclude

type CriterioExclude = Exclude<Criterio, 'greater'>

// 6. Record

type Pessoas = Record<string, Person>

const pessoas: Pessoas = {
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
}