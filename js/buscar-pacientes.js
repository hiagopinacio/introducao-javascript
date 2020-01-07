var btnBuscarPacientes = document.querySelector("#buscar-paciente")

btnBuscarPacientes.addEventListener("click", function () {

    var xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes") //configura o metodo e endereço de requisição

    xhr.addEventListener("load", function () {

        var resposta = xhr.responseText //string com resultado da requisição
        var pacientesImportados = JSON.parse(resposta)
        console.log(pacientesImportados); //transforma a string recebida em um array com objetos js

    })
    xhr.send()
})