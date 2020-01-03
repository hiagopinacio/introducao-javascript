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

    var imcTd = document.createElement("td")
    imcTd.textContent = calculaIMC(formAdiciona.peso.value, formAdiciona.altura.value)
    imcTd.classList.add("info-imc")
    pacienteTr.appendChild(imcTd)
})
