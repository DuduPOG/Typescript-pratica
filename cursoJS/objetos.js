/*
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

function criarPessoa (nome, sobrenome, idade){
    return { nome, sobrenome, idade };
}

const pessoa1 = criarPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criarPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criarPessoa('João', 'Moreira', 55);
const pessoa4 = criarPessoa('Junior', 'Lara', 44);
const pessoa5 = criarPessoa('Jean', 'Otávio', 69);

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);
console.log(pessoa5.nome);

*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();