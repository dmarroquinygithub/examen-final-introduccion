function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        var expresion = document.getElementById('display').value;
        // La función eval toma la cadena expression y la ejecuta como si fuera JavaScript
        var result = eval(expresion);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
