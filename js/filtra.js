var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function () {

    var pacientes = document.querySelectorAll(".paciente")
    var filtro = this.value

    if (filtro.length > 0) {

        pacientes.forEach(function (paciente) {

            var tdnome = paciente.querySelector(".info-nome")

            // cria expressão regular com valor a ser buscado:
            var expressaoRegular = new RegExp(filtro, "i") // 'i' = case-insensitive

            if (expressaoRegular.test(tdnome.textContent)) {
                paciente.classList.remove("invisivel")
            } else {
                paciente.classList.add("invisivel")
            }
        })
    } else {

        pacientes.forEach(function (paciente) {

            paciente.classList.remove("invisivel")
        })
    }

})