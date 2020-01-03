var botaoFormulario = document.querySelector("#adicionar-paciente")

botaoFormulario.addEventListener("click", function (event) {

    event.preventDefault()

    var formAdiciona = document.querySelector("#form-adiciona")

    var paciente = obtemPacienteDoFormulario(formAdiciona)

    var pacienteTr = montaTr(paciente)

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr)

    formAdiciona.reset()
})


function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente
}

function montaTd(dado, classeCSS) {

    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classeCSS)

    return td
}

function montaTr(paciente) {
    var tr = document.createElement("tr")
    tr.classList.add("paciente")
    tr.appendChild(montaTd(paciente.nome, "info-nome"))
    tr.appendChild(montaTd(paciente.peso, "info-peso"))
    tr.appendChild(montaTd(paciente.altura, "info-altura"))
    tr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    tr.appendChild(montaTd(paciente.imc, "info-imc"))

    return tr
}
