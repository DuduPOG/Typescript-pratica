// função clássica
/*
function saudacao(nome) {
    return `Bom dia, ${nome}!`;
}
const nome = 'Luiz';
console.log(saudacao(nome));

// função anônima (necessita ser fechada com ';')
const raiz = function (n) {
    return n ** 0.5;
};
*/
// arrow function (sintaxe moderna e minimalista para blocos de códigos menores e simples)
// Não necessita de return nem de parênteses caso só tenha 1 parâmetro
// const raiz = (n) => n ** 0.5;
const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));