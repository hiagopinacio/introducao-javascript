var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function () {

    console.clear();
    console.log(campoFiltro.value);
    var pacientes = document.querySelectorAll(".paciente")
    pacientes.forEach(function (paciente) {

        nome = paciente.querySelector(".info-nome")
        console.log(nome)

        if (campoFiltro.value == nome.textContent) {
            paciente.classList.remove("invisivel")
        } else {
            paciente.classList.add("invisivel")
        }
    })

})