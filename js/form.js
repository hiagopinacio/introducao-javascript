var botaoFormulario = document.querySelector("#adicionar-paciente")


botaoFormulario.addEventListener("click", function (event) {

    event.preventDefault()

    var formAdiciona = document.querySelector("#form-adiciona")

    var paciente = obtemPacienteDoFormulario(formAdiciona)

    var erros = validaForm(paciente)

    if (erros.length > 0) {
        exibeListaDeErros(erros)
        return
    }

    var pacienteTr = montaTr(paciente)

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr)

    formAdiciona.reset()

    var listaErros = document.querySelector("#lista-erros")
    listaErros.innerHTML = ""
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

function validaForm(paciente) {
    var erros = []

    if (paciente.nome.length == 0) erros.push("O nome não pode estar em branco.")

    if (paciente.peso.length == 0) erros.push("O peso não pode estar em branco.")

    if (paciente.altura.length == 0) erros.push("A altura não pode estar e branco.")

    if (paciente.gordura.length == 0) erros.push("A gordura corporal não pode estar em branco.")

    if (!validaPeso(paciente.peso)) erros.push("Valor de peso inválido.")

    if (!validaAltura(paciente.altura)) erros.push("Valor de altura inválido.")

    return erros
}

function exibeListaDeErros(erros) {
    var ul = document.querySelector("#lista-erros");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    })
}
