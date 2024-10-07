// Função simples (Declarativa)
function saudacao() {
    return console.log("Olá mundo");
}

// Função com Parâmetros
function soma(valorA, valorB) {
    const totalSoma = valorA + valorB;
    return console.log(totalSoma);
}

// Função Anônima
const multiplicar = function (valorA, valorB) {
    const total = valorA * valorB;
    return console.log(total);
} 

// Arrow Function
const dividir = (a, b) => a / b;

// Função com valor padrão de parametro
function exponencial(base, expoente =2) {
    const exp = base ** expoente;
    return console.log(exp);
} 

// Invocar as funções 
saudacao();
soma(10, 5);
multiplicar(3, 6);
exponencial(3);
exponencial(3, 3);

// Função de callback
function inicializarAplicacao() {
    saudacao();
    soma(10, 5);
    multiplicar(3, 6);
    exponencial(3);
    exponencial(3, 3);
}

inicializarAplicacao();