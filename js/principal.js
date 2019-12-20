console.log("Olá, mundo!")

var titulo = document.querySelector(".titulo")

titulo.textContent = "Aparecida Nutricionista"


var paciente = document.querySelector("#primeiro-paciente")

var tdPeso = paciente.querySelector(".info-peso")
var peso = tdPeso.textContent
var pesoEhValido = true

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido")
    tdPeso.textContent = "inválido"
    pesoEhValido = false
}


var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent
var alturaEhValida = true

if (altura <= 0 || altura >= 3.0) {
    console.log("Altura inválida")
    tdAltura.textContent = "inválido"
    alturaEhValida = false
}


var tdIMC = paciente.querySelector(".info-imc")
tdIMC.textContent = "ERRO"

if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura ** altura)
    tdIMC.textContent = imc
}



