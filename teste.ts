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

// const vazio = []; // tipo any, ou seja, pode-se adicionar qualquer tipo

const cores = ['verde', 'azul', 'amarelo']; // tipo string, so aceita adições de strings

const cores2 = ['branco', 'preto', 'vermelho'];

for (let cor of cores){
    console.log(cor);
}
*/
function multiplicar(n1: number, n2: number) : number {
    return n1 * n2;
}

let fatorial = function (n: number) : number {
    if (n === 1){
        return 1;
    }
    return n * fatorial(n - 1);
}

// função anônima
let multiplicarA = function (n1 : number, n2 : number) : number {
    return n1 * n2;
};

let resultado: number = multiplicar(10, 3);

let raiz2 = (n: number) => n ** 0.5;

console.log(raiz2(1));
console.log(raiz2(4));
console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));
console.log(fatorial(5));
console.log(resultado);
console.log(multiplicarA(10, 3));
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

