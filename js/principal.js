console.log("Olá, mundo!")

var titulo = document.querySelector(".titulo")

titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent
    var pesoEhValido = true

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido")
        tdPeso.textContent = "inválido"
        pesoEhValido = false
        paciente.classList.add("paciente-invalido")
    }


    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent
    var alturaEhValida = true

    if (altura <= 0 || altura >= 3.0) {
        console.log("Altura inválida")
        tdAltura.textContent = "inválido"
        alturaEhValida = false
        paciente.classList.add("paciente-invalido")
    }


    var tdIMC = paciente.querySelector(".info-imc")
    tdIMC.textContent = "ERRO"

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura ** altura)
        tdIMC.textContent = imc.toFixed(2)
    }
}

var botaoFormulario = document.querySelector("#adicionar-paciente")

botaoFormulario.addEventListener("click", function (event) {
    event.preventDefault()

    var formAdiciona = document.querySelector("#form-adiciona")

    var tabela = document.querySelector("#tabela-pacientes")

    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")
    tabela.appendChild(pacienteTr)

    var nomeTd = document.createElement("td")
    nomeTd.textContent = formAdiciona.nome.value
    nomeTd.classList.add("info-nome")
    pacienteTr.appendChild(nomeTd)

    var pesoTd = document.createElement("td")
    pesoTd.textContent = formAdiciona.peso.value
    pesoTd.classList.add("info-peso")
    pacienteTr.appendChild(pesoTd)

    var alturaTd = document.createElement("td")
    alturaTd.textContent = formAdiciona.altura.value
    alturaTd.classList.add("info-altura")
    pacienteTr.appendChild(alturaTd)

    var gorduraTd = document.createElement("td")
    gorduraTd.textContent = formAdiciona.gordura.value
    gorduraTd.classList.add("info-gordura")
    pacienteTr.appendChild(gorduraTd)

})

