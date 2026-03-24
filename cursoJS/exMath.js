const numero = Number(prompt('Digite um número:'));

const numeroTitulo = window.document.getElementById('numero-titulo');
numeroTitulo.innerHTML = numero;

const raizQuadrada = window.document.getElementById('raiz-quadrada');
raizQuadrada.innerHTML = numero ** 0.5;

const inteiro = window.document.getElementById('inteiro');
inteiro.innerHTML = numero;
const ehInteiro = window.document.getElementById('ehInteiro');
ehInteiro.innerHTML = Number.isInteger(numero);

const nan = window.document.getElementById('nan');
nan.innerHTML = Number.isNaN(numero);

const arredondaParaBaixo = window.document.getElementById('arredondamento-baixo');
arredondaParaBaixo.innerHTML = Math.floor(numero);

const arredondaParaCima = window.document.getElementById('arredondamento-cima');
arredondaParaCima.innerHTML = Math.ceil(numero);

const casasDecimais = window.document.getElementById('casas-decimais');
casasDecimais.innerHTML = numero.toFixed(2);