/*

const pessoa1 = {
    nome: "Lulu",
    sobrenome: "Santos",
    idade: 47,

    aniversario(){
        this.idade++;
    }
};
console.log(`Este é o objeto ${pessoa1.nome} - ${pessoa1.sobrenome} - ${pessoa1.idade}`)
pessoa1.aniversario();
console.log(`Idade alterada: ${pessoa1.idade}`);

*/
// const vazio = []; // tipo any, ou seja, pode-se adicionar qualquer tipo
const cores = ['verde', 'azul', 'amarelo']; // tipo string, so aceita adições de strings

const cores2 = ['branco', 'preto', 'vermelho'];

for (let cor of cores){
    console.log(cor);
}

/*
let cor = cores.pop();

let cor2 = cores.shift();

const cores2 = Array(4);
cores2.unshift('vermelho');
console.log(cores2);

console.log(cor);
console.log(cor2);
*/



/*
// arranjos idênticos
const numeros = Array(3, 5, 7); // tipo number, também só aceita do do tipo number
const numeros2 = [3, 5, 7]; // tipo number, também só aceita do do tipo number

console.log(cores.length === numeros.length);

vazio.push(2);
vazio.push('2');
console.log(vazio);
*/

