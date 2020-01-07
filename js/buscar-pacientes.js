var btnBuscarPacientes = document.querySelector("#buscar-paciente")

btnBuscarPacientes.addEventListener("click", function () {

    var xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes") //configura o metodo e endereço de requisição

    xhr.addEventListener("load", function () {

        if (xhr.status == 200) { //o código 200 diz que a requisição foi bem sucedida
            document.querySelector("#erro-buscar-paciente").innerHTML = ""
            var resposta = xhr.responseText //string com resultado da requisição
            var pacientesImportados = JSON.parse(resposta)

            console.log(pacientesImportados); //transforma a string recebida em um array com objetos js

            pacientesImportados.forEach(function (paciente) {

                adicionaPaciente(paciente)
            })
        } else {
            document.querySelector("#erro-buscar-paciente").textContent = "erro ao carregar lista"
            console.log("Erro na requisição:");
            console.log(xhr.statusText)
        }

    })
    xhr.send()
})