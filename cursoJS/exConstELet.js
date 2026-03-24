/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 37;
const peso = 84;
const alturaEmM = 1.8;
const anoNascimento = 2026 - idade;

function imc(peso, altura){
    return peso / altura ** 2
}

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc(peso, alturaEmM)}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);