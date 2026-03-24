/*
const num1 = Number(window.prompt(`Digite um número:`));
const num2 = Number(window.prompt(`Digite outro número:`));
const resultado = num1 + num2;
window.alert(`A soma dos números ${num1} e ${num2} é ${resultado}`);
*/

let varA = 'A'; // 'B'
let varB = 'B'; // 'C'
let varC = 'C'; // 'A'

/* jeito antigo kkkkkkkkkkkkk
let aux = varA;
varA = varB;
varB = varC;
varC = aux;
*/

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC)