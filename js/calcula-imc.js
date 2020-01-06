var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent
    var pesoEhValido = validaPeso(peso)

    if (!pesoEhValido) {
        console.log("Peso inválido")
        tdPeso.textContent = "inválido"
        pesoEhValido = false
        paciente.classList.add("paciente-invalido")
    }

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent
    var alturaEhValida = validaAltura(altura)

    if (!alturaEhValida) {
        console.log("Altura inválida")
        tdAltura.textContent = "inválido"
        alturaEhValida = false
        paciente.classList.add("paciente-invalido")
    }

    var tdIMC = paciente.querySelector(".info-imc")
    tdIMC.textContent = "ERRO"

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaIMC(peso, altura)
        tdIMC.textContent = imc
    }
}

function calculaIMC(peso, altura) {

    var imc = peso / (altura ** altura)

    return imc.toFixed(2)
}

function validaPeso(peso) {
    if (peso > 0 || peso < 1000) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura) {
    if (altura > 0 || altura < 3.0) {
        return true
    } else {
        return false
    }
}