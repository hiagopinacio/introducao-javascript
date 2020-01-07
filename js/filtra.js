var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function () {

    var pacientes = document.querySelectorAll(".paciente")

    if (this.value.length > 0) {

        pacientes.forEach(function (paciente) {

            nome = paciente.querySelector(".info-nome")

            if (campoFiltro.value == nome.textContent) {
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