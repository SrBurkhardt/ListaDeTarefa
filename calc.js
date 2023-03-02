// função 

function inserir(num) {
    var numero = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = numero + num
}

function excluir() {
    document.getElementById('result').innerHTML = ' '
}

function back() {
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
    var resultado = document.getElementById('result').innerHTML;
    if (resultado) {
        document.getElementById('result').innerHTML = eval(resultado)
    } else {
        document.getElementById('result').innerHTML = 'Erro'
    }
}