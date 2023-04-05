var display = document.getElementById("display");
var displayCima = document.getElementById("displayCima");
var valorDisplay = '';
var valorCima = '';
var valor = '';
var sinal = '';

function addValor(x) {
    valor += x; //
    exibirNoDisplay(x)
    valorDisplay = valor // guardando o valor completo
    console.log(valorDisplay)
    display.innerHTML = valor // valor no display
}

function exibirCima(valor) {
    displayCima.innerHTML = valor
}

function exibirNoDisplay(valor) {
    display.innerHTML = valor
}

function addSinal(x) {
    if(valor != ''){
        if (x == '+'){
            exibirCima(valor += '+')
        }else if (x == '-'){
            displayCima.innerHTML = valor += '-' // valor de cima
            valorCima = valor // guardando valor cima
            valor = ''
        }else if (x == '/'){
            displayCima.innerHTML = valor += '/' // valor de cima
            valorCima = valor // guardando valor cima
            valor = ''
        }else{
            displayCima.innerHTML = valor += '*' // valor de cima
            valorCima = valor // guardando valor cima
            valor = ''
        }
}

function calcular() {
    resultado = eval(valorCima + valorDisplay); // resultado
    exibirNoDisplay(resultado)
    return resultado
    displayCima.innerHTML = '' // valor cima restado
    display.innerHTML = valorDisplay
    valor = valorDisplay
}

function limpar() {
    exibirCima('')
    exibirNoDisplay('')
    valor = ''
}

function limparDisplay() {
    exibirNoDisplay('')
    valor = ''
}

function apagar() {
    var ultimoValor = valor.length - 1
    valorDisplay = valorDisplay.slice(0,ultimoValor);
    valor = valorDisplay
    exibirNoDisplay(valorDisplay)
}