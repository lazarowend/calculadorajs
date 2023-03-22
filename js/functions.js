var display = document.getElementById("display");
var displayCima = document.getElementById("displayCima");
var valorDisplay = '';
var valorCima = '';
var valor = '';
var sinal = '';

function addValor(x) {
    valor += ''+x; //
    valorDisplay = valor // guardando o valor completo
    console.log(valorDisplay)
    display.innerHTML = x // valor no display
}

function addSinal(x) {
    if (x === '+' & valor != '') {
        displayCima.innerHTML = valor += '+' // valor de cima
        valorCima = valor // guardando valor cima
    }if (x === '/' & valor != '') {
        displayCima.innerHTML = valor += '/' // valor de cima
        valorCima = valor // guardando valor cima
    }if (x === '*' & valor != '') {
        displayCima.innerHTML = valor += '*' // valor de cima
        valorCima = valor // guardando valor cima
    }if (x === '-' & valor != '') {
        console.log('-')
        displayCima.innerHTML = valor += '-' // valor de cima
        valorCima = valor // guardando valor cima
    };
}

function calcular() {
    valorDisplay = eval(valorCima + valorDisplay); // resultado
    displayCima.innerHTML = '' // valor cima restado
    display.innerHTML = valorDisplay
    valor = valorDisplay
}

function limpar() {
    displayCima.innerHTML = '';
    display.innerHTML = '';
    valor = ''
}

function limparDisplay() {
    display.innerHTML = '';
    valor = ''
}

function apagar() {
    var ultimoValor = valor.length - 1
    valorDisplay = valorDisplay.slice(0,ultimoValor);
    valor = valorDisplay
    display.innerHTML = valorDisplay
}