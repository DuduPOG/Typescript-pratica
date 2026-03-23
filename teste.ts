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