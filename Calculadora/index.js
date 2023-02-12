const cero = document.getElementById("cero")
const uno = document.getElementById("uno")
const dos = document.getElementById("dos")
const tres = document.getElementById("tres")
const cuatro = document.getElementById("cuatro")
const cinco = document.getElementById("cinco")
const seis = document.getElementById("seis")
const siete = document.getElementById("siete")
const ocho = document.getElementById("ocho")
const nueve = document.getElementById("nueve")
const suma = document.getElementById("suma")
const resta = document.getElementById("resta")
const multiplicacion = document.getElementById("multiplicacion")
const division = document.getElementById("division")
const igual = document.getElementById("igual")
const borrarN = document.getElementById("borrar")


var numeroA;
var numeroB;
var operacion;

function limpiar() {
    resultado.value = "";
}

function borrar() {
    resultado.value = "";
    numeroA = 0;
    numeroB = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(numeroA) + parseFloat (numeroB);
            break;
        case "-":
            res = parseFloat(numeroA) - parseFloat (numeroB);
            break;
        case "*":
            res = parseFloat(numeroA) * parseFloat (numeroB);
            break;
        case "/":
            res = parseFloat(numeroA) / parseFloat (numeroB);
            break;
    }
    borrar()
    resultado.value = res;
}

cero.onclick = function(e){
    resultado.value += this.value;
}
uno.onclick = function(e){
    resultado.value += this.value;
}
dos.onclick = function(e){
    resultado.value += this.value;
}
tres.onclick = function(e){
    resultado.value += this.value;
}
cuatro.onclick = function(e){
    resultado.value += this.value;
}
cinco.onclick = function(e){
    resultado.value += this.value;
}
seis.onclick = function(e){
    resultado.value += this.value;
}
siete.onclick = function(e){
    resultado.value += this.value;
}
ocho.onclick = function(e){
    resultado.value += this.value;
}
nueve.onclick = function(e){
    resultado.value += this.value;
}
suma.onclick = function(e){
    numeroA = resultado.value
    operacion = "+"
    resultado.value += this.value;
    limpiar()
}
resta.onclick = function(e){
    numeroA = resultado.value
    operacion = "-"
    resultado.value += this.value;
    limpiar()
}
multiplicacion.onclick = function(e){
    numeroA = resultado.value
    operacion = "*"
    resultado.value += this.value;
    limpiar()
}
division.onclick = function(e){
    numeroA = resultado.value
    operacion = "/"
    resultado.value += this.value;
    limpiar()
}

igual.onclick = function (e) {
    numeroB = resultado.value;
    resolver()
}
borrarN.onclick = function (e){
    borrar()
}


